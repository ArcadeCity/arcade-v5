import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import { observer } from 'mobx-react-lite'
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { useStores } from 'stores'
import { Button, Screen, Text, TextField } from 'views/shared'
import { Message } from '../../components'
import * as styles from './styles'
import { translate } from 'i18n'

let messages: any[] = []

export const Chatroom: React.FC<{}> = observer(() => {
  // State
  const { authStore, chatStore, playerStore } = useStores()
  const activeChatroom = chatStore.activeChatroom

  // Form
  const { register, setValue } = useForm()
  const [state, update] = useState('')

  let prettyName = ''

  // Nav
  const { setOptions } = useNavigation()
  useEffect(() => {
    setOptions({ title: prettyName })
  }, [prettyName])

  // UI
  let flatList: any
  console.log('Messages changed', messages.length)
  useEffect(() => {
    // Any time messages changes, scroll to end.
    flatList && flatList.scrollToEnd()
  }, [messages])

  useEffect(() => {
    register('message')
  }, [register])

  if (!activeChatroom) {
    return (
      <Screen preset='fixedCenter'>
        <Text preset='title2' tx='common.loading' />
      </Screen>
    )
  }

  const chatroomId = activeChatroom.id
  messages = activeChatroom.messages
  prettyName = activeChatroom.prettyName
  const id = authStore.player.id

  const sendit = () => {
    chatStore.messageSend(state, chatroomId)
    update('')
    setValue('message', '')
  }

  const dock = (
    <View style={styles.DOCK}>
      <TextField
        placeholder={translate('service.enterMessage')}
        onChangeText={(text) => {
          update(text)
          setValue('message', text)
        }}
        value={state}
        autoCorrect={false}
        // inputStyle={{ lineHeight: 18 }}
        style={styles.TEXTBOX}
        onFocus={() => {
          setTimeout(() => {
            flatList && flatList.scrollToEnd()
          }, 150)
        }}
      />
      <Button
        preset='small'
        tx='social.send'
        onPress={sendit}
        style={{ marginHorizontal: 10, height: 35 }}
      />
    </View>
  )

  return (
    <Screen key={`${id}-${authStore?.locale}`} preset='chatroom' dockHeight={0} dock={dock}>
      <FlatList
        initialNumToRender={25}
        ref={(elm) => (flatList = elm)}
        data={messages}
        onContentSizeChange={() => flatList.scrollToEnd()}
        renderItem={({ item: message }) => (
          <Message
            message={message}
            preset={message.userId === id ? 'sent' : 'received'}
            setSelectedPlayer={playerStore.setSelectedPlayer}
          />
        )}
        keyExtractor={(message) => message.id.toString()}
      />
    </Screen>
  )
})
