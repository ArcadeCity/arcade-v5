import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
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
      <View
        style={{
          position: 'absolute',
          bottom: 80,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: palette.electricIndigo,
            borderRadius: 10,
            paddingLeft: 26,
            paddingRight: 20,
          }}
        >
          <Text
            style={{
              fontFamily: 'Avenir',
              fontWeight: '700',
              fontSize: 24,
              textAlign: 'center',
              letterSpacing: 5,
              paddingVertical: 20,
              paddingHorizontal: 0,
              color: palette.moonRaker,
            }}
          >
            LOG IN
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
