import { Instance, types } from 'mobx-state-tree'

export const PlayerModel = types.model('Player').props({
  id: types.identifierNumber,
  bio: types.maybe(types.string),
  city: types.maybe(types.string),
  guildRole: types.optional(types.string, 'Placeholder'),
  level: types.maybe(types.integer),
  nearby: types.maybe(types.boolean),
  profession: types.maybe(types.string),
  profilePicture: types.maybe(types.string),
  username: types.maybe(types.string),
})

export interface Player extends Instance<typeof PlayerModel> {}
