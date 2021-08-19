import React from 'react'
import { Text, View } from 'react-native'
import { palette } from '../../views/theme/palette'
import { TEXT } from './WalletApp'
import useWebSocket, { ReadyState } from 'react-use-websocket'

export const ImperviousWebsockets = () => {
  const { sendMessage, lastMessage, readyState } = useWebSocket(
    'ws://127.0.0.1:8884'
  )

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState]

  // console.log(sendMessage)
  console.log(lastMessage)
  console.log(readyState)

  return (
    <View
      style={{
        width: '100%',
        padding: 15,
        marginTop: 25,
        backgroundColor: palette.haiti,
      }}
    >
      <Text style={TEXT}>Let's connect to our local Impervious node.</Text>
      <Text style={TEXT}>Connection status: {connectionStatus}</Text>
      <Text style={TEXT}>
        Last message: {JSON.stringify(lastMessage ? lastMessage.data : {})}
      </Text>
    </View>
  )
}
