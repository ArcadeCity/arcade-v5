import { GuildModel } from '../guild-models'
import { GuildStore } from '../guild-store'

export const loadDummyData = async (self: GuildStore) => {
  const guild1 = GuildModel.create({
    id: 1,
    name: 'Super Guild',
    mission: 'Awesome mission',
    centerCoords: {
      latitude: 30,
      longitude: -97,
    },
    establishedAt: Date.now(),
  })

  const guild2 = GuildModel.create({
    id: 2,
    name: 'Even More Super Guild',
    mission: 'Awesomer mission',
    centerCoords: {
      latitude: 31,
      longitude: -97,
    },
    establishedAt: Date.now(),
  })

  self.setGuild(guild1)
  self.setGuild(guild2)

  return true
}
