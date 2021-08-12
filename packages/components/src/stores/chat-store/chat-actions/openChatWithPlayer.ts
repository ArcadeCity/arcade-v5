import { Alert } from 'react-native'
import { display } from 'lib'
import { ChatApi, normalizeApiChatroom } from 'services/api'
import { Chatroom, ChatStore } from 'stores/chat-store'

export const openChatWithPlayer = async (self: ChatStore, playerId: number) => {
  const chatApi = new ChatApi(self.env.api)
  const myid = self.rootStore.authStore.id

  display({
    name: 'openChatWithPlayer',
    preview: `Opening chat with player ${playerId}`,
  })

  // Disallow talking to yourself
  if (myid === playerId) {
    Alert.alert('Talking to yourself does not require an app!')
    return false
  }

  // Fetch two-player chatroom from API, creating if it doesn't exist
  const res = await chatApi.fetchDirectChatroomWithPlayer(playerId)
  if (res.kind === 'ok') {
    const chatroom: Chatroom = normalizeApiChatroom(res.chatroom)
    self.setChatroom(chatroom)
    self.setActiveChatroom(chatroom.id)
    display({
      name: 'openChatWithPlayer',
      preview: `Retrieved chatroom`,
      value: chatroom,
    })
  }

  return true
}
