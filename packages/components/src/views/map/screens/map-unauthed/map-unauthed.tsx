import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { observer } from 'mobx-react-lite'
import { useQuery } from 'react-query'
import MapboxGL from '@react-native-mapbox-gl/maps'
import { useNavigation } from '@react-navigation/native'
import { featureCollection, FeatureCollection } from '@turf/helpers'
import { Button } from 'views/shared'
import * as styles from './map-styles'
import { ENTER_BUTTON, ENTER_CONTAINER } from './styles'
import { makeGeojson } from '../util'

export const MapUnauthed: React.FC<{}> = observer(() => {
  // Nav
  const { navigate, setOptions } = useNavigation()
  useEffect(() => {
    setOptions({ title: 'Arcade City' })
  }, [])

  // Data
  const [geojson, setGeojson]: any = useState(null)

  useQuery('mapData', async () => {
    // console.log('yea lets fetch it')
    const res = await fetch('https://api2.arcade.city/api/map-data')
    const data = await res.json()
    const mapGeojson = makeGeojson(data)
    setGeojson(mapGeojson)
  })

  const theUserShape: FeatureCollection = geojson ?? featureCollection([])

  return (
    <View style={styles.CONTAINER}>
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
      <View style={ENTER_CONTAINER}>
        <Button
          tx='onboarding.enterTheCity'
          style={ENTER_BUTTON}
          onPress={() => navigate('enterPhone')}
        />
      </View>
    </View>
  )
})
