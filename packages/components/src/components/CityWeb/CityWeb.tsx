import React from 'react'
import { Text, View } from 'react-native'
import { palette } from '../../views/theme/palette'

export const CityWeb = () => {
  return (
    <View
      style={{
        backgroundColor: palette.electricViolet,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: 'white', fontSize: 44, fontFamily: 'monospace' }}>
        City
      </Text>
    </View>
  )
}
