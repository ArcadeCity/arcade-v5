import React, { useEffect, useState } from 'react'
import { Alert, StatusBar, View } from 'react-native'
import { RootStore, RootStoreProvider, setupRootStore } from '../../stores'
import { Mapbox } from '../Mapbox'

export const CityApp = () => {
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined)

  // Kick off initial async loading actions, like loading fonts and RootStore
  useEffect(() => {
    ;(async () => {
      // Check if we're on the latest app version; download and refresh if not.
      // await checkForUpdates()
      // await initFonts() // expo
      try {
        setupRootStore(null).then(setRootStore)
      } catch (e) {
        Alert.alert('An error', e.message)
      }
    })()
  }, [])

  if (!rootStore) return null

  return (
    <View style={{ flex: 1 }}>
      <RootStoreProvider value={rootStore}>
        <StatusBar barStyle='light-content' />
        <Mapbox />
      </RootStoreProvider>
    </View>
  )
}
