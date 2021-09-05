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
    relayStore.subscribeToUser(
      'e5b6b45fbe40c891de636679cf71c00d26f95a9c9a093c78adf760ef265d42f5'
    )
    // relayStore.subscribeToUser(
    //   'b91268018358bd83c80b972c1c955550294169ce64a4daf6d5b32ab9be02843b'
    // ) // -- invalid signature?
  }, [])
  return <View style={{ flex: 1, backgroundColor: palette.haiti }}></View>
}
