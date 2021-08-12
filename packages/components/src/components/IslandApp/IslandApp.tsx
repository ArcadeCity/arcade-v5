import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { palette } from '../../theme'
import { Mapbox } from '../Mapbox'
import bitcoinimg from './bitcoinisland.png'

export const IslandApp = () => {
  return (
    <View style={{ flex: 1 }}>
      <Mapbox />
      <View
        style={{
          position: 'absolute',
          top: 70,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        pointerEvents='none'
      >
        <Image
          source={bitcoinimg}
          style={{ width: 300, height: 200 }}
          resizeMode='contain'
        />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 70,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: palette.prBlue,
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
