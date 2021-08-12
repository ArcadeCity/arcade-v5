import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavButton, WalletButton } from 'views/shared'
import { color, typography } from 'views/theme'
import { Placeholder } from 'views/wallet'

const stackOptions = ({ navigation }: any) => ({
  headerStyle: {
    backgroundColor: color.tabbar,
    elevation: 0,
    shadowColor: 'transparent',
  },
  headerTintColor: color.palette.white,
  headerTitleStyle: {
    fontFamily: typography.bold,
  },
  headerLeft: () => <NavButton onPress={navigation.goBack} />,
  headerRight: () => <WalletButton />,
})

const Stack = createStackNavigator()

export const WalletNavigator = () => (
  <Stack.Navigator initialRouteName='placeholder'>
    <Stack.Screen
      name='placeholder'
      component={Placeholder}
      options={stackOptions}
    />
  </Stack.Navigator>
)
