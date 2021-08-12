import React from 'react'
import MapboxGL from '@react-native-mapbox-gl/maps'
import { layerStyles, mapImages } from './mapbox.styles'
import { onLayerPress } from './onLayerPress'

export const GuildLayer = ({
    guildShape,
    setSelectedGuild,
    showMapOverlayFor,
    userAuthed,
}: any) => (
    <MapboxGL.ShapeSource
        id="guilds"
        onPress={(event: any) =>
            onLayerPress({ event, setSelectedGuild, showMapOverlayFor, userAuthed })
        }
        cluster
        clusterRadius={50}
        // clusterMaxZoom={14}
        images={mapImages}
        shape={guildShape}
    >
        <MapboxGL.SymbolLayer id="guildCount" style={layerStyles.clusterCount} />

        <MapboxGL.CircleLayer
            id="clusteredPointsGuilds"
            belowLayerID="guildCount"
            filter={['has', 'point_count']}
            // style={layerStyles.clusteredPointsGuilds}
        />

        <MapboxGL.SymbolLayer
            id="guildImage"
            // filter={['!has', 'point_count']}
            style={layerStyles.profileImage}
        />
    </MapboxGL.ShapeSource>
)
