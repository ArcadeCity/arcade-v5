import React, { useEffect, useState } from 'react'
import { Alert, View } from 'react-native'
import { RootStore, RootStoreProvider, setupRootStore } from '../../stores'
import { palette } from '../../theme'

export const IslandApp = () => {
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

  console.log('rootStore:', rootStore)

  return (
    <React.StrictMode>
      <View style={{ flex: 1, backgroundColor: palette.electricIndigo }}></View>
    </React.StrictMode>
  )
}
