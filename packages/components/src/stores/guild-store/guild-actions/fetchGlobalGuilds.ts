import { GuildApi } from 'services/api'
import { Guild, GuildModel } from '../guild-models'
import { GuildStore } from '../guild-store'

// On map-unauthed, we want to show a list of all global guilds
export const fetchGlobalGuilds = async (self: GuildStore) => {
  const api = new GuildApi(self.env.api)
  const { guilds }: any = await api.fetchGlobalGuilds()

  console.tron.log('guilds is ', guilds)

  const guildsToAdd: Guild[] = []

  if (guilds) {
    guilds.forEach((guild: Guild) => {
      // guild from server - normalize?
      const alreadyGuild = self.guilds.get(guild.id.toString())
      if (!alreadyGuild) {
        const guildToAdd: Guild = GuildModel.create({
          centerCoords: {
            latitude: guild.centerCoords.latitude,
            longitude: guild.centerCoords.longitude,
          },
          id: guild.id,
          mission: guild.mission,
          name: guild.name,
          establishedAt: guild.establishedAt,
        })
        guildsToAdd.push(guildToAdd)
      }
    })
    self.setGuilds(guildsToAdd)
  }

  return true
}
