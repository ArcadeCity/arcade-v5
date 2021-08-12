import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { usePushNotifications } from 'lib/hooks'
import { TabBar } from 'views/shared'
import { ChatNavigator } from './chat-navigator'
import { GuildNavigator } from './guild-navigator'
import { MapNavigator } from './map-navigator'
import { MenuNavigator } from './menu-navigator'
import { ServiceNavigator } from './service-navigator'
import { WalletNavigator } from './wallet-navigator'

const hideHeaderOptions = () => ({
  headerShown: false,
})

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName='map'
    tabBar={(props) => <TabBar {...props} />}
  >
    <Tab.Screen name='map' component={MapNavigator} />
    <Tab.Screen name='service' component={ServiceNavigator} />
    <Tab.Screen name='inbox' component={ChatNavigator} />
    <Tab.Screen name='guild' component={GuildNavigator} />
    <Tab.Screen name='menu' component={MenuNavigator} />
  </Tab.Navigator>
)

export function MainNavigator() {
  usePushNotifications()
  return (
    <Stack.Navigator initialRouteName='tabs'>
      <Stack.Screen
        name='tabs'
        component={TabNavigator}
        options={hideHeaderOptions}
      />
      <Stack.Screen
        name='wallet'
        component={WalletNavigator}
        options={hideHeaderOptions}
      />
    </Stack.Navigator>
  )
}
