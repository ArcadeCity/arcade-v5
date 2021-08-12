import React, { useEffect } from 'react'
import { View, ViewStyle } from 'react-native'
import { observer } from 'mobx-react-lite'
import { useNavigation } from '@react-navigation/native'
// import { usePlayerResolver } from 'lib/hooks'
import { useStores } from 'stores'
import { Chatroom } from 'stores/chat-store'
// import { Loading } from 'views/loading'
import { Screen } from 'views/shared'
import { spacing } from 'views/theme'
import { ChatroomDetail } from '../../components'
import { usePlayerResolver } from 'lib/hooks'
import { Loading } from 'views/loading'

export const ChatHome: React.FC<{}> = observer(() => {
  // Nav
  const { setOptions } = useNavigation()
  useEffect(() => {
    setOptions({ title: 'Chat' })
  }, [])

  // State
  const { chatStore } = useStores()
  const chatrooms = chatStore.chatrooms

  const { loadedAllPlayers } = usePlayerResolver({ chatrooms })
  if (!loadedAllPlayers) return <Loading message='Loading' />

  const chatroomsArray: any[] = []
  chatrooms.forEach((chatroom: Chatroom) => {
    if (chatroom.messages.length === 0 && chatroom.type === 'direct') return
    if (chatroom.type === 'request') return // TODO
    const lastMessage: any =
      chatroom.messages[chatroom.messages.length - 1] ?? null
    chatroomsArray.push({
      ...chatroom,
      lastMessage,
    })
  })

  // TODO: should be a chatStore view
  const sortedChatrooms = chatroomsArray.sort((a: any, b: any) => {
    if (a.lastMessage && b.lastMessage) {
      return b.lastMessage.createdAt - a.lastMessage.createdAt
    } else if (a.lastMessage && !b.lastMessage) {
      return -1
    } else if (b.lastMessage && !a.lastMessage) {
      return 1
    } else {
      return 0
    }
  })

  const renderChatrooms = () => {
    return sortedChatrooms.map((chatroom: any) => {
      return (
        <ChatroomDetail
          key={chatroom.id}
          chatroom={chatroom}
          setActiveChatroom={chatStore.setActiveChatroom}
        />
      )
    })
  }

  return (
    <Screen preset='scrollStack'>
      <View style={CONTAINER}>{renderChatrooms()}</View>
    </Screen>
  )
})

const CONTAINER: ViewStyle = {
  paddingBottom: spacing[7],
  marginTop: spacing[5],
}
