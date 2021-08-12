import React from 'react'
import { Text, View } from 'react-native'
import { palette } from '../../theme'
import { Mapbox } from '../Mapbox'

export const IslandApp = () => {
  return (
    <View style={{ flex: 1 }}>
      <Mapbox />
      <View
        style={{
          position: 'absolute',
          top: 110,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        pointerEvents='none'
      >
        <Text
          style={{
            fontFamily: 'Avenir',
            fontSize: 74,
            textAlign: 'center',
            letterSpacing: 5,
            lineHeight: 84,
            color: palette.minsk,
          }}
        >
          BITCOIN ISLAND
        </Text>
      </View>
    </View>
  )
}
