import React, { useEffect } from 'react'
import { View } from 'react-native'
import { values } from 'mobx'
import { useStores } from 'stores'
import { Text } from 'views/shared'
import { palette } from 'views/theme'

export const NostrDemo = () => {
  const { relayStore } = useStores()
  useEffect(() => {
    relayStore.subscribeToUser(
      '645981d1d595fb60bbfd6539a82a8808f2a17e95c94694196d7ba81a587d659a'
    )
    relayStore.subscribeToUser(
      'e5b6b45fbe40c891de636679cf71c00d26f95a9c9a093c78adf760ef265d42f5'
    )
  }, [])
  const eventsArray = relayStore.events ? values(relayStore.events) : []
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 70,
        paddingHorizontal: 20,
        backgroundColor: palette.haiti,
      }}
    >
      {eventsArray.map((eventItem: any) => (
        <Text text={eventItem.id} style={{ marginVertical: 10 }} />
      ))}
    </View>
  )
}
