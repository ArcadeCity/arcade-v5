import { log } from 'lib'
import { GuildApi } from 'services/api'
import { GuildStore } from 'stores/guild-store'
import { Player } from 'stores/player-store'

// Fetch guild members for a guildId, or selectedGuild if we don't pass guild id
export const fetchGuildMembers = async (self: GuildStore, guildId: number) => {
  // First check to see if we're already fetching
  if (self.fetchingMembers) {
    return false
  }

  self.setFetchingMembers(true)

  const api = new GuildApi(self.env.api)
  const { members }: any = await api.fetchGuildMembers(guildId)

  log('members is ', members)
  log('guildId is ', guildId)

  if (members) {
    const guild = self.guilds.get(guildId.toString())
    if (!guild) {
      log('NO GUILD?????????')
    } else {
      const { setMember } = guild
      members.forEach((member: Player) => {
        setMember(member)
      })
    }
  }

  self.setFetchingMembers(false)

  return true
}
