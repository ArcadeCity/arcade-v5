import React from 'react'
import { Text, View } from 'react-native'
import { palette } from '../../views/theme/palette'

export const CityWeb = () => {
  return (
    <View
      style={{
        backgroundColor: palette.electricIndigo,
        flex: 1,
      }}
    >
      <Text style={{ color: 'white', fontSize: 44, fontFamily: 'monospace' }}>
        CityWeb Test
      </Text>
    </View>
  )
}
