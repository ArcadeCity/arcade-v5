import * as React from 'react'
import MapboxGL from '@react-native-mapbox-gl/maps'
import { layerStyles } from './mapbox.styles' // , mapImages
import { onLayerPress } from './onLayerPress'

export const PlayerLayer = ({
  playerShape,
  setSelectedPlayer,
  setMapOverlay,
}: any) => {
  return (
    <MapboxGL.ShapeSource
      id='players'
      onPress={(event: any) =>
        onLayerPress({ event, setSelectedPlayer, setMapOverlay })
      }
      cluster
      clusterRadius={50}
      // clusterMaxZoom={14}
      shape={playerShape}
    >
      <MapboxGL.SymbolLayer id='pointCount' style={layerStyles.clusterCount} />

      <MapboxGL.CircleLayer
        id='clusteredPoints'
        belowLayerID='pointCount'
        filter={['has', 'point_count']}
        style={layerStyles.clusteredPoints}
      />

      <MapboxGL.SymbolLayer
        id='profileImage'
        // @ts-ignore
        filter={['!', ['has', 'point_count']]}
        style={layerStyles.profileImage}
      />
    </MapboxGL.ShapeSource>
  )
}
