import React, { useEffect } from 'react'
import { View } from 'react-native'
import { log } from 'lib'
import { useStores } from 'stores'
import { palette } from 'views/theme'

export const NostrDemo = () => {
  const { relayStore } = useStores()
  useEffect(() => {
    log('Test subscribe...')
    relayStore.subscribeToUser(
      '645981d1d595fb60bbfd6539a82a8808f2a17e95c94694196d7ba81a587d659a'
    )
  }, [])
  return <View style={{ flex: 1, backgroundColor: palette.haiti }}></View>
}
