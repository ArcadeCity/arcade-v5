/**
 * The root navigator is used to switch between major navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow (which is contained in your MainNavigator) which the user
 * will use once logged in.
 */
import React, { useEffect } from 'react'
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { MainNavigator } from './main/main-navigator'
import { AuthNavigator } from './auth-navigator'
// import { WalletNavigator } from './wallet-navigator'
import { OnboardingNavigator } from './onboarding-navigator'
import { useStores } from 'stores'
import { observer } from 'mobx-react-lite'
import { usePlayerResolver } from 'lib/hooks'
import { Loading } from 'views/loading'
import { values } from 'mobx'
import { ServiceRequest } from 'stores/service-store'
import { changeLanguage } from 'i18n'

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * We recommend using MobX-State-Tree store(s) to handle state rather than navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type RootParamList = {
  authStack: undefined
  onboardingStack: undefined
  mainStack: undefined
}

const Stack = createStackNavigator<RootParamList>()

const RootStack = observer(() => {
  const { authStore, chatStore, serviceStore } = useStores()
  const isUserLoggedIn = authStore.authed
  const readyToEnter = authStore.canEnterCity

  useEffect(() => {
    if (readyToEnter) {
      authStore.getLocation()
      chatStore.setupBroadcastListeners()
      // serviceStore.decideActiveRequest()
    }
  }, [readyToEnter])

  authStore?.locale && changeLanguage(authStore.locale) // set i18n locale if user has set in authStore
  const chatrooms = chatStore.chatrooms
  const requests: any = values(serviceStore.serviceRequests)

  const { loadedAllPlayers } = usePlayerResolver({ chatrooms, requests })
  if (!loadedAllPlayers) return <Loading message='Loading' />

  const initialRouteName = isUserLoggedIn
    ? readyToEnter
      ? 'mainStack'
      : 'onboardingStack'
    : 'authStack'

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={initialRouteName}
    >
      {!isUserLoggedIn && (
        <Stack.Screen
          name='authStack'
          component={AuthNavigator}
          options={{
            headerShown: false,
          }}
        />
      )}
      {isUserLoggedIn && !readyToEnter && (
        <Stack.Screen
          name='onboardingStack'
          component={OnboardingNavigator}
          options={{
            headerShown: false,
          }}
        />
      )}
      {isUserLoggedIn && readyToEnter && (
        <Stack.Screen
          name='mainStack'
          component={MainNavigator}
          options={{
            headerShown: false,
          }}
        />
      )}
    </Stack.Navigator>
  )
})

export const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <RootStack />
    </NavigationContainer>
  )
})

RootNavigator.displayName = 'RootNavigator'
