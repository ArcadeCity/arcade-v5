import * as React from 'react'
import { View } from 'react-native'
import { Text } from 'views/shared'
import { color } from 'views/theme'

export const Updater = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 300,
        backgroundColor: color.background,
      }}
    >
      <Text preset='title' tx='common.updating' />
    </View>
  )
}
