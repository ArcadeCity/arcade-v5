import 'i18n'
import 'lib/ignore-warnings'
import React, { useEffect, useRef, useState } from 'react'
import { Alert, StatusBar, View } from 'react-native'
import { NavigationContainerRef } from '@react-navigation/native'
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context'
import { enableScreens } from 'react-native-screens'
import * as storage from 'lib/storage'
import {
  RootNavigator,
  setRootNavigation,
  useNavigationPersistence,
} from 'navigation'
import { magic } from 'services/magic'
import { RootStore, RootStoreProvider, setupRootStore } from 'stores'
import { Loading } from 'views/loading'
import { ModalContainer } from 'views/modal'

enableScreens()

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE'

export const CityApp = () => {
  const navigationRef = useRef<NavigationContainerRef>(null)
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined)

  setRootNavigation(navigationRef)
  const { initialNavigationState, onNavigationStateChange } =
    useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY)

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

  if (!rootStore) return <Loading message='Loading' />

  return (
    <>
      <magic.Relayer />
      <RootStoreProvider value={rootStore}>
        <StatusBar barStyle='light-content' />
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <View style={{ flex: 1, zIndex: 50 }}>
            <RootNavigator
              ref={navigationRef}
              initialState={initialNavigationState}
              onStateChange={onNavigationStateChange}
            />
            <ModalContainer />
          </View>
        </SafeAreaProvider>
      </RootStoreProvider>
    </>
  )
}
