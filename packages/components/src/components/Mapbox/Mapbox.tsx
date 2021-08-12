import React from 'react'
import { View } from 'react-native'
import MapboxGL from '@react-native-mapbox-gl/maps'
import { palette } from '../../theme'

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiYWNsaW9ucyIsImEiOiJja3M5NGNvOHYwcjJ4MnZwZW10azYyNDFhIn0.nKlBGTV6rb6UbK53mDZDWQ'
)

export const Mapbox = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapboxGL.MapView
        style={{ flex: 1 }}
        pitchEnabled={false}
        rotateEnabled={false}
        styleURL={styleURLs.blank}
      >
        <MapboxGL.Camera
          defaultSettings={{
            centerCoordinate: [-50, 10],
            zoomLevel: 1,
          }}
          maxZoomLevel={6}
        />
      </MapboxGL.MapView>
    </View>
  )
}

export const styleURLs = {
  blank: 'mapbox://styles/aclions/cjoo2gldl3bio2rmktwhcy0qh',
  main: 'mapbox://styles/aclions/cjeai04xo08k02rozqsi9di5a',
}
