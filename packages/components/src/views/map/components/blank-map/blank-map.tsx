import React from 'react'
import MapboxGL from '@react-native-mapbox-gl/maps'
import * as MapStyles from '../mapbox/mapbox.styles'

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiYWNsaW9ucyIsImEiOiJjamVhMmNtY2swaXNtMnBsbnB2aDVqNTBiIn0.gM_i1jhawFz2EpKBX4VmwQ'
)

export const BlankMap = () => (
  <MapboxGL.MapView
    userTrackingMode={MapboxGL.UserTrackingModes.Follow}
    rotateEnabled={false}
    pitchEnabled={false}
    scrollEnabled={true}
    zoomEnabled={true}
    style={MapStyles.map}
    styleURL={MapStyles.styleURLs.main}
  />
)
