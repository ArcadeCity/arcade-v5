import React, { useState } from 'react'
import { View } from 'react-native'
import { observer } from 'mobx-react-lite'
import { useQuery } from 'react-query'
import MapboxGL from '@react-native-mapbox-gl/maps'
import { featureCollection, FeatureCollection } from '@turf/helpers'
// import { useStores } from 'stores'
import { ServiceOverlay } from '../../components'
import * as styles from '../map-unauthed/map-styles'
import { makeGeojson } from '../util'

export const MapIdle: React.FC<{}> = observer(() => {
  // State
  // const { authStore } = useStores()
  // const geo = authStore.geo

  // Data
  // useEffect(() => {
  //   if (geo) {
  //     playerStore.fetchNearbyReport()
  //   }
  // }, [geo])

  const [geojson, setGeojson]: any = useState(null)

  useQuery('mapData', async () => {
    const res = await fetch('https://arcade.city/api/map-data')
    const data = await res.json()
    const mapGeojson = makeGeojson(data)
    setGeojson(mapGeojson)
  })

  const theUserShape: FeatureCollection = geojson ?? featureCollection([])

  return (
    <View style={styles.CONTAINER}>
      <ServiceOverlay />
      <MapboxGL.MapView
        style={styles.CONTAINER}
        styleURL={styles.mapStyles.main}
        rotateEnabled={false}
        pitchEnabled={false}
      >
        <MapboxGL.Camera
          defaultSettings={{
            centerCoordinate: [-50, 10],
            zoomLevel: 1,
          }}
          maxZoomLevel={6}
        />

        <MapboxGL.ShapeSource
          id='guilds'
          cluster
          clusterRadius={50}
          // @ts-expect-error 1005
          shape={theUserShape}
        >
          <MapboxGL.SymbolLayer id='guildCount' style={styles.clusterCount} />
          <MapboxGL.CircleLayer
            id='clusteredPointsGuilds'
            belowLayerID='guildCount'
            style={styles.clusteredPointsGuilds}
          />
        </MapboxGL.ShapeSource>
      </MapboxGL.MapView>
    </View>
  )
})
