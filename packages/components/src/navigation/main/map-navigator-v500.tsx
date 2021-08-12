import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { color, typography } from 'views/theme'
import { MapScreen } from 'views/map'

const stackOptions = ({ navigation }: any) => ({
  headerStyle: {
    backgroundColor: color.tabbar,
    elevation: 0,
  },
  headerTintColor: color.palette.white,
  headerTitleStyle: {
    fontFamily: typography.bold,
  },
  headerShown: false,
  // headerLeft: () => <NavButton onPress={navigation.goBack} />,
})

const Stack = createStackNavigator()

export const MapNavigator = () => (
  <Stack.Navigator initialRouteName='map'>
    <Stack.Screen name='map' component={MapScreen} options={stackOptions} />
  </Stack.Navigator>
)
