import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { CharterExample, GuildCreate, GuildHome } from 'views/guild'
import { NavButton, WalletButton } from 'views/shared'
import { color, typography } from 'views/theme'

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

export const GuildNavigator = () => (
  <Stack.Navigator initialRouteName='guildHome'>
    <Stack.Screen
      name='charterExample'
      component={CharterExample}
      options={stackOptions}
    />
    <Stack.Screen
      name='guildCreate'
      component={GuildCreate}
      options={stackOptions}
    />
    <Stack.Screen
      name='guildHome'
      component={GuildHome}
      options={stackOptions}
    />
  </Stack.Navigator>
)
