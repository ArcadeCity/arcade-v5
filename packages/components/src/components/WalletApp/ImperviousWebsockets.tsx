import React from 'react'
import { Text, View } from 'react-native'
import { palette } from '../../views/theme/palette'
import { TEXT } from './WalletApp'

export const ImperviousWebsockets = () => {
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
    </View>
  )
}
