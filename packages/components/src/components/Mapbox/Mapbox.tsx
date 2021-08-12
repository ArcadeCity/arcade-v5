import React from 'react'
import { View } from 'react-native'
import MapboxGL from '@react-native-mapbox-gl/maps'
import { palette } from '../../theme'

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiYWNsaW9ucyIsImEiOiJja3M5NGNvOHYwcjJ4MnZwZW10azYyNDFhIn0.nKlBGTV6rb6UbK53mDZDWQ'
)

export const Mapbox = () => {
  return (
    <View style={{ flex: 1, backgroundColor: palette.electricViolet }}>
      <MapboxGL.MapView style={{ flex: 1 }} />
    </View>
  )
}
