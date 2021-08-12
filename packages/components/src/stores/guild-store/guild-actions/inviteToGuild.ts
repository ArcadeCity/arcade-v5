import { Alert } from 'react-native'
import { GuildApi } from 'services/api'
import { GuildStore } from '../guild-store'

/**
 * Invite selected player to this user's guild.
 */

export const inviteToGuild = async (self: GuildStore) => {
  const guildId = self.guild.id
  const guildName = self.guild.name
  const playerId = self.rootStore.playerStore.selectedPlayer.id
  const name = self.rootStore.playerStore.selectedPlayer.username
  const uid = self.rootStore.authStore.id

  console.tron.display({
    name: 'Guild invite...',
    value: {
      guildId,
      guildName,
      playerId,
      name,
    },
    preview: 'Inviting ' + name + ' to ' + guildName,
    important: true,
  })

  const api = new GuildApi(self.env.api)
  const res: any = await api.guildInviteMember(guildId, playerId, uid)

  if (res && res.ok) {
    Alert.alert(undefined, `guild.inviteSent`)
  }

  return res.ok ?? false
}
