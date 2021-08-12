import * as React from 'react'
import MapboxGL from '@react-native-mapbox-gl/maps'
import { mapLayers } from './mapbox.styles'

export const RouteLayer = ({ routeShape }: any) => {
    return (
        <MapboxGL.ShapeSource id="route" shape={routeShape}>
            <MapboxGL.LineLayer id="routeFill" style={mapLayers.route} />
        </MapboxGL.ShapeSource>
    )
}
