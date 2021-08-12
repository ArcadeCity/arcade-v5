// @ts-nocheck
import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { MapHome, NearbyPlayers } from 'views/map'
// import { OnlineOffline } from 'views/shared'
import { color, typography } from 'views/theme'
import { NavButton } from 'views/shared'
import { Chatroom, Profile } from 'views/social'

const stackOptions = ({ navigation, route }: any) => ({
  headerStyle: {
    backgroundColor: color.tabbar,
    elevation: 0,
  },
  headerTintColor: color.palette.white,
  headerTitleStyle: {
    fontFamily: typography.bold,
  },
  headerLeft: () =>
    route.name !== 'mapHome' && <NavButton onPress={navigation.goBack} />,
  // headerLeft: () => <OnlineOffline />,
  // headerRight: () => <MessagesButton />,
})

const chatroomStackOptions = ({ navigation }: any) => ({
  headerStyle: {
    backgroundColor: color.tabbar,
    elevation: 0,
  },
  headerTintColor: color.palette.white,
  headerTitleStyle: {
    fontFamily: typography.bold,
  },
  headerLeft: () => <NavButton onPress={navigation.goBack} />,
  headerRight: () => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* <SmartHeaderButton /> */}
      {/* <MessagesButton /> */}
    </View>
  ),
})

const Stack = createStackNavigator()

export const MapNavigator = () => (
  <Stack.Navigator initialRouteName='mapHome'>
    <Stack.Screen name='mapHome' component={MapHome} options={stackOptions} />
    <Stack.Screen
      name='nearbyPlayers'
      component={NearbyPlayers}
      options={stackOptions}
    />
    <Stack.Screen name='profile' component={Profile} options={stackOptions} />
    <Stack.Screen
      name='chatroom'
      component={Chatroom}
      options={chatroomStackOptions}
    />
  </Stack.Navigator>
)
