import * as React from 'react'
import MapboxGL from '@react-native-mapbox-gl/maps'
import { onPickupDropPress } from './onLayerPress'
import { layerStyles, mapImages } from './mapbox.styles'

export const PickupDropLocationLayer = ({
  pickupDropShape,
  showMapOverlayFor,
  setCurrentSelectionOverlay,
}: any) => {
  return (
    <MapboxGL.ShapeSource
      id='path'
      onPress={(event: any) =>
        onPickupDropPress({
          event,
          setCurrentSelectionOverlay,
          showMapOverlayFor,
          pickupDropShape,
        })
      }
      cluster
      clusterRadius={50}
      // clusterMaxZoom={14}
      images={mapImages}
      shape={pickupDropShape}
    >
      <MapboxGL.SymbolLayer
        id='pathImage'
        // @ts-ignore
        filter={['!', ['has', 'point_count']]}
        style={layerStyles.pickupDropImage}
      />
    </MapboxGL.ShapeSource>
  )
}
