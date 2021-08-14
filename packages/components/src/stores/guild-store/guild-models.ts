import { values } from 'mobx'
import { getRoot, Instance, types } from 'mobx-state-tree'
import { CoordsModel } from 'stores/service-store'
import haversine from 'haversine'
import { Player, PlayerModel } from 'stores/player-store'
import { log } from 'lib'

export const GuildMemberModel = types.model('GuildMember').props({
  id: types.identifierNumber,
  name: types.string,
  photo: types.string,
  rank: types.string,
})

export const GuildModel = types
  .model('Guild')
  .props({
    /** Whether a guild's charter has been approved by Arcade City Hall */
    charterApproved: types.optional(types.boolean, false),
    /** An HTTP URL where the guild's charter can be found */
    charterUrl: types.maybe(types.string),
    /** Coords of the guild center, for service radius etc. */
    centerCoords: CoordsModel,
    /** The UTC date when the guild was established, aka when created in app unless overridden with custom date */
    establishedAt: types.Date,
    /** The guild's unique id */
    id: types.optional(types.identifierNumber, 0),
    /** The Guild's members */
    // members: types.optional(types.map(GuildMemberModel), {}), // TODO: Better as map?
    members: types.optional(types.map(types.reference(PlayerModel)), {}), // TODO: Better as map?
    /** The guild's mission statement - required */
    mission: types.string,
    /** The guild name - required */
    name: types.string,
  })
  .actions((self) => ({
    setMember(member: Player) {
      self.members.put(member)
    },
    setMission(value: string) {
      self.mission = value
    },
    beforeDestroy: async (): Promise<boolean> => {
      // If we delete this guild, lets delete it also from references if it is one so no broken references
      const root: any = getRoot(self)

      const {
        guildStore: { guild, selectedGuild },
      } = root

      // Ok lets grab the IDs of the invites we need to delete from firebase AS WE DELETE them,
      // Then delete them BY INVITE ID from store.

      // root.guildStore.deleteStoreInvitesFromGuild(self.id)

      // So if we're a member of a guild and it gets deleted, byebye
      if (guild && guild.id && guild.id === self.id) {
        log('was in this guild, NOT ANYMORE!')
        root.guildStore.setGuildId(undefined)
      }

      // So if we're looking at a guild profile and it gets deleted.. byebye
      if (selectedGuild && selectedGuild.id && selectedGuild.id === self.id) {
        log('was looking at this guild, NOT ANYMORE!')
        root.guildStore.setSelectedGuild(undefined)
      }

      return true
    },
  }))
  .views((self) => ({
    get centerCoordsArray() {
      return [self.centerCoords.longitude, self.centerCoords.latitude]
    },
    get memberCount() {
      if (typeof self.members === 'object') {
        return values(self.members).length
      } else {
        return 0
      }
    },
    /** Distance from user */
    distance() {
      const root = getRoot(self) as any
      const userCoords = root.authStore.coords
      const distance = haversine(userCoords, self.centerCoords, {
        format: '{lon,lat}',
      })
      const roundedDistance = Math.floor(distance * 10) / 10
      return roundedDistance
    },
  }))

export const GuildReference = types.maybe(
  types.reference(GuildModel, {
    // given an identifier, find the guild
    get(identifier /* string */, parent: any /*Store*/) {
      // does this assume... we in guildstore?
      // return parent.guilds.find(g => g.id === identifier) || null
      log('Here parent is what?', parent)
      // @ts-ignore
      return getRoot(parent).guildStore.guilds.get(identifier) || null
    },
    set(value /* GuildModel */) {
      return value.id
    },
  })
)

export const GuildInviteModel = types.model('GuildInvite').props({
  guild: GuildReference,
  id: types.identifierNumber,
  invitedPlayer: types.maybe(types.string),
  invitingPlayer: types.maybe(types.string),
  status: types.maybe(types.string),
  when: types.Date,
})

export interface Guild extends Instance<typeof GuildModel> {}
export interface GuildInvite extends Instance<typeof GuildInviteModel> {}
export interface GuildMember extends Instance<typeof GuildMemberModel> {}
