import { Alert } from 'react-native'
import { GuildApi } from 'services/api'
import { GuildStore } from '../guild-store'

export const leaveGuild = async (self: GuildStore, guildId: number) => {
  const api = new GuildApi(self.env.api)

  // This should return the chatroom ID so we know which to leave
  const { guildChatroomIdToLeave }: any = await api.leaveGuild(guildId)
  self.setSelectedGuild(0)
  self.setGuildId(undefined)
  self.rootStore.chatStore.deleteChatroom(guildChatroomIdToLeave)

  // Alert.alert(undefined, `guild.memberLeft`)
  Alert.alert('You have left the guild.')

  return true
}
