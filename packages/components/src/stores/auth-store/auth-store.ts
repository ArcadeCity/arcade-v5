import * as Localization from 'expo-localization'
import { ExpoPushToken } from 'expo-notifications'
import { Instance, SnapshotOut, types } from 'mobx-state-tree'
import haversine from 'haversine'
import { Coords } from 'stores/service-store'
import { withEnvironment, withRootStore } from 'stores/_extensions'
import * as actions from './auth-actions'
import {
  AccessTokensModel,
  AuthedPlayer,
  AuthedPlayerModel,
  GeoModel,
  PermissionsModel,
} from './auth-models'

export const AuthStoreModel = types
  .model('AuthStore')
  .props({
    geo: types.maybe(GeoModel),
    location: types.optional(types.frozen(), {}),
    permissions: types.optional(PermissionsModel, {
      location: null,
      notifications: null,
    }),
    player: types.maybe(AuthedPlayerModel),
    tokens: types.optional(AccessTokensModel, { api: null }),
    emailInput: types.optional(types.string, ''),
    loggingIn: types.optional(types.boolean, false),
  })
  .extend(withEnvironment)
  .extend(withRootStore)
  .actions((self) => ({
    getLocation: async (): Promise<boolean> =>
      await actions.getLocation(self as AuthStore),
    login: async (): Promise<boolean> => await actions.login(self as AuthStore),
    loginServer: async (token: string): Promise<boolean> =>
      await actions.loginServer(self as AuthStore, token),
    logout: async (): Promise<boolean> =>
      await actions.logout(self as AuthStore),
    saveBio: async (bio: string): Promise<boolean> =>
      await actions.saveBio(self as AuthStore, bio),
    saveInvite: async (email: string, message: string): Promise<boolean> =>
      await actions.saveInvite(self as AuthStore, email, message),
    saveOnboarded: async (onboarded: boolean): Promise<boolean> =>
      await actions.saveOnboarded(self as AuthStore, onboarded),
    saveProfession: async (profession: string): Promise<boolean> =>
      await actions.saveProfession(self as AuthStore, profession),
    savePushToken: async (token: ExpoPushToken): Promise<boolean> =>
      await actions.savePushToken(self as AuthStore, token),
    saveTermsAgree: async (whenAgree: Date): Promise<boolean> =>
      await actions.saveTermsAgree(self as AuthStore, whenAgree),
    saveUsername: async (username: string): Promise<boolean> =>
      await actions.saveUsername(self as AuthStore, username),
    submitFeedback: async (feedback: string): Promise<boolean> =>
      await actions.submitFeedback(self as AuthStore, feedback),
    setApiToken(token: string) {
      self.tokens.api = token
    },
    setAuthedPlayer(player: AuthedPlayer) {
      self.player = player
    },
    setBio(value: string) {
      self.player.bio = value
    },
    setEmailInput(email: string) {
      self.emailInput = email
    },
    setGeo(value: any) {
      self.geo = value
    },
    setInvites(invites: number) {
      self.player.invites = invites
    },
    setLocale(locale: string) {
      self.player.locale = locale
    },
    setLocation(value: any) {
      self.location = value
    },
    setLocationPermission(value: any) {
      self.permissions.location = value
    },
    setLoggingIn(loggingIn: boolean) {
      self.loggingIn = loggingIn
    },
    setMagicToken(token: string) {
      self.tokens.magic = token
    },
    setOnboarded(value: boolean = true) {
      self.player.onboarded = value
    },
    setProfession(value: string) {
      self.player.profession = value
    },
    setPushToken(token: string) {
      self.tokens.push = token
    },
    // setSolAddress(address: string) {
    //   self.player.solAddress = address
    // },
    setTermsAgree(value: Date) {
      self.player.acceptedTerms = value.toString()
    },
    setUsername(value: string) {
      self.player.username = value
    },
    reset() {
      self.geo = undefined
      self.location = undefined
      self.permissions = undefined
      self.player = undefined
      self.tokens = undefined
      self.emailInput = ''
      self.loggingIn = false
    },
  }))
  .views((self) => ({
    distance(to: Coords): string {
      if (
        !to ||
        !to?.latitude ||
        !to?.longitude ||
        !self.location.coords ||
        !self.location.coords.latitude
      ) {
        return '0'
      }
      const coords = self.location.coords as Coords
      const hav = haversine<any>(to, coords) as number
      return hav.toFixed(1)
    },
    get authed(): boolean {
      return !!self.player && !!self.tokens.api
    },
    get bio(): string {
      return self.player?.bio ?? ''
    },
    get coords(): Coords {
      return self.location.coords ?? { latitude: 0, longitude: 0 }
    },
    get locale(): string {
      return self.player?.locale || Localization.locale || 'en'
    },
    get id(): number {
      return self.player?.id
    },
    get invited(): boolean {
      return !!self.player && self?.player?.invited
    },
    get invites(): number {
      return !!self.player && self?.player?.invites
    },
    get isServiceProvider(): boolean {
      return (
        !!self.player &&
        !!self.player.profession &&
        self.player.profession !== 'Rider'
      )
    },
    get onboarded(): boolean {
      return !!self.player && self?.player?.onboarded
    },
    get profession(): string {
      return self.player?.profession ?? ''
    },
    get username(): string {
      return self.player?.username ?? ''
    },
    get canEnterCity(): boolean {
      return (
        !!self.tokens.api &&
        !!self.location &&
        self.permissions &&
        self.permissions.location &&
        self.permissions.location.status &&
        self.permissions.location.status === 'granted' &&
        self.player?.invited &&
        !!self.player?.acceptedTerms &&
        !!self.player?.bio &&
        !!self.player?.profession &&
        !!self.player?.username
      )
    },
    get hasUserAcceptedTerms(): boolean {
      return !!self.player?.acceptedTerms // || date is less than updated terms...
    },
  }))

type AuthStoreType = Instance<typeof AuthStoreModel>
export interface AuthStore extends AuthStoreType {}
type AuthStoreSnapshotType = SnapshotOut<typeof AuthStoreModel>
export interface AuthStoreSnapshot extends AuthStoreSnapshotType {}
export const createAuthStoreDefaultModel = () =>
  types.optional(AuthStoreModel, {})
