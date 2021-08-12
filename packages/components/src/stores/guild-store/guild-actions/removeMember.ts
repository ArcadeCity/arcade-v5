import { Alert } from 'react-native'
import { GuildApi } from 'services/api'
import { Player } from 'stores/player-store'
import { GuildStore } from '../guild-store'

export const removePlayerFromGuild = async (
  self: GuildStore,
  player: Player,
  guildId: number
) => {
  const api = new GuildApi(self.env.api)
  await api.removePlayerFromGuild(player.id, guildId)
  Alert.alert(`You removed ${player.username} from the guild.`)
  return
}
