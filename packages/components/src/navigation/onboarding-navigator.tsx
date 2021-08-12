import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Connect } from 'views/comms'
import {
  EnableLocation,
  InviteRequired,
  SetBio,
  SetProfession,
  SetUsername,
  Terms,
  Welcome,
} from 'views/onboarding'
import { NavButton } from 'views/shared'
import { color, typography } from 'views/theme'
import { usePushNotifications } from 'lib/hooks'
import { NavigationProp, RouteProp } from '@react-navigation/core'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

const Stack = createStackNavigator()

interface StackProps {
  route: RouteProp<any, any>
  navigation: NavigationProp<any>
}

export const stackOptions = ({ navigation, route }: StackProps) => ({
  headerStyle: {
    backgroundColor: color.tabbar,
    elevation: 0,
    shadowColor: 'transparent',
  },
  headerTintColor: color.palette.white,
  headerTitleStyle: {
    fontFamily: typography.bold,
  },
  headerLeft: () =>
    // route.name !== 'welcome' &&
    route.name !== 'terms' && <NavButton onPress={navigation.goBack} />,
})

export const OnboardingNavigator = ({ route }: StackProps) => {
  usePushNotifications()

  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Invite Required'

  return (
    <Stack.Navigator
      initialRouteName='Invite Required'
      screenOptions={{
        headerShown: routeName !== 'Invite Required',
      }}
    >
      <Stack.Screen
        name='Invite Required'
        component={InviteRequired}
        options={stackOptions}
      />
      <Stack.Screen name='connect' component={Connect} options={stackOptions} />

      <Stack.Screen name='welcome' component={Welcome} options={stackOptions} />

      <Stack.Screen
        name='enableLocation'
        component={EnableLocation}
        options={stackOptions}
      />
      {/* <Stack.Screen
        name='enableNotifications'
        component={EnableNotifications}
        options={stackOptions}
      /> */}
      <Stack.Screen name='setBio' component={SetBio} options={stackOptions} />
      <Stack.Screen
        name='setProfession'
        component={SetProfession}
        options={stackOptions}
      />
      <Stack.Screen
        name='setUsername'
        component={SetUsername}
        options={stackOptions}
      />
      <Stack.Screen name='terms' component={Terms} options={stackOptions} />
    </Stack.Navigator>
  )
}
