import { getRoot, Instance, SnapshotOut, types } from 'mobx-state-tree'
import { withEnvironment, withRootStore } from 'stores/_extensions'
import { isNil } from 'ramda'
import * as actions from './guild-actions'
import * as views from './guild-views'
import {
  Guild,
  GuildInvite,
  GuildInviteModel,
  GuildModel,
} from './guild-models'
import { RootStore } from 'stores/root-store'

/**
 * Handles state for guilds
 */
export const GuildStoreModel = types
  .model('GuildStore')
  .props({
    /** Are we currently fetching guild members? */
    fetchingMembers: types.optional(types.boolean, false),
    /** Reference to the guild the current user is a member of */
    guild: types.maybe(types.reference(GuildModel)),
    /** The guilds we know about */
    guilds: types.optional(types.map(GuildModel), {}),
    /** Map of this player's guild invites */
    invites: types.optional(types.map(GuildInviteModel), {}),
    /** The selected guild like in a profile */
    selectedGuild: types.maybe(types.reference(GuildModel)),
    /** The selected invite, like for GuildInvited */
    selectedInvite: types.maybe(types.reference(GuildInviteModel)),
  })
  .extend(withEnvironment)
  .extend(withRootStore)
  .actions((self) => ({
    /** Promote or demote member (of any guild role) to a different guild role */
    changeMemberRole: async (): Promise<boolean> =>
      await actions.changeMemberRole(self as GuildStore),
    /** Create a new guild */
    createGuild: async (guild: Guild): Promise<boolean> =>
      await actions.createGuild(self as GuildStore, guild),
    /** Fetch all guilds globally */
    fetchGlobalGuilds: async (): Promise<boolean> =>
      await actions.fetchGlobalGuilds(self as GuildStore),
    /** Fetch the guild members of the selected guild */
    fetchGuildMembers: async (guildId: number): Promise<boolean> =>
      await actions.fetchGuildMembers(self as GuildStore, guildId),
    /** Accept a guild invite */
    inviteAccept: async (invite: GuildInvite): Promise<boolean> =>
      await actions.inviteAccept(self as GuildStore, invite),
    /** Ignore a guild invite */
    inviteIgnore: async (invite: GuildInvite): Promise<boolean> =>
      await actions.inviteIgnore(self as GuildStore, invite),
    /** Invite selected player to guild */
    inviteToGuild: async (): Promise<boolean> =>
      await actions.inviteToGuild(self as GuildStore),
    /** Leave current guild */
    leaveGuild: async (guildId: number): Promise<boolean> =>
      await actions.leaveGuild(self as GuildStore, guildId),
    /** Load dummy data for kitchen sink */
    loadDummyData: async (): Promise<boolean> =>
      await actions.loadDummyData(self as GuildStore),
    /** Remove member from guild */
    // removeMember: async (uid: number, guildId: number): Promise<boolean> =>
    //   await actions.removeMember(self, uid, guildId),
    /** Save mission statement */
    saveMission: async (mission: string): Promise<boolean> =>
      await actions.saveMission(self, mission),
    /** Setters */
    deleteAllInvites() {
      self.invites = undefined // BUT will it repopulate???
    },
    setFetchingMembers(value: boolean) {
      self.fetchingMembers = value
    },
    setGuild(guild: Guild) {
      self.guilds.put(guild)
    },
    setGuilds(guilds: Guild[]) {
      guilds.forEach((guild: Guild) => {
        self.guilds.put(guild)
      })
    },
    setGuildId(guildId: any) {
      // const safeGuildId = guildId === 'null' || !guildId ? undefined : guildId
      // if (safeGuildId) {
      //   const guildStore = self as GuildStore
      //   guildStore.fetchGuildMembers(safeGuildId)
      // }
      // self.guild = safeGuildId
      self.guild = guildId
    },
    setSelectedGuild(id: number) {
      self.selectedGuild = self.guilds.get(id.toString())
    },
    setSelectedInvite(value: any) {
      self.selectedInvite = value
    },
    reset() {
      self.selectedGuild = undefined
      self.guilds = undefined
    },
  }))
  .views((self) => ({
    /** Get guild rank of current user */
    get guildRank(): string {
      if (!self.guild) {
        return ''
      }
      const root = getRoot(self) as RootStore
      const uid = root.authStore.id
      return self.guild.members.get(uid.toString()).guildRole
    },
    /** Can the current user create a new guild? */
    get canCreateGuild(): boolean {
      return isNil(self.guild)
    },
    /** Can the current user edit their own guild? */
    get canEditOwnGuild(): boolean {
      return false
    },
    /** Can the current user send invites to their own guild? */
    get canInviteToOwnGuild(): boolean {
      if (!self.guild) {
        return false
      }
      const uid = self.rootStore.authStore.id
      const guild = self.guild.members.get(uid.toString())
      if (guild) {
        const { guildRole: rank } = guild
        return rank === 'founder' || rank === 'leader' || rank === 'officer'
      } else {
        return false
      }
    },
    /** Can the current user promote/demote members in their own guild? How handle target player's role? */
    get canPromoteDemote(): boolean {
      return false
    },
    /** Is the current user in a guild? */
    get isInAGuild(): boolean {
      return self.guild ? true : false
    },
    /** Is the current user a member of guild with id ___? */
    isMemberOfGuild(id: number): boolean {
      return self.guild && self.guild.id === id
    },
    /** Return list of guilds sorted by distance to user */
    get guildsByDistance() {
      return views.guildsByDistance(self)
    },
    /** Return list of guild invites sorted by date, filtered for duplicates */
    get invitesFiltered() {
      return views.invitesFiltered(self)
    },
    /** GeoJson shape of all guilds */
    get guildShape() {
      return views.guildShape(self)
    },
  }))

type GuildStoreType = Instance<typeof GuildStoreModel>
export interface GuildStore extends GuildStoreType {}
type GuildStoreSnapshotType = SnapshotOut<typeof GuildStoreModel>
export interface GuildStoreSnapshot extends GuildStoreSnapshotType {}
export const createGuildStoreDefaultModel = () =>
  types.optional(GuildStoreModel, {})
