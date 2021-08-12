import React from 'react'
import { View } from 'react-native'
import MapboxGL from '@react-native-mapbox-gl/maps'
import { palette } from '../../theme'

export const Mapbox = () => {
  return (
    <View style={{ flex: 1, backgroundColor: palette.electricViolet }}>
      <MapboxGL.MapView style={{ flex: 1 }} />
    </View>
  )
}
