import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ChangeLanguage, Changelog, Connect, Feedback } from 'views/comms'
// import { Wallet } from 'views/crypto'
import { MainMenu } from 'views/menu'
import { Invites, SetBio, SetProfession, SetUsername } from 'views/onboarding'
import { NavButton, WalletButton } from 'views/shared'
import { ProfileEdit } from 'views/social'
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

export const MenuNavigator = () => (
  <Stack.Navigator initialRouteName='menu'>
    <Stack.Screen
      name='profileEdit'
      component={ProfileEdit}
      options={stackOptions}
    />
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
    <Stack.Screen name='menu' component={MainMenu} options={stackOptions} />
    <Stack.Screen
      name='changelog'
      component={Changelog}
      options={stackOptions}
    />
    <Stack.Screen
      name='changeLanguage'
      component={ChangeLanguage}
      options={stackOptions}
    />
    <Stack.Screen name='invites' component={Invites} options={stackOptions} />
    <Stack.Screen name='connect' component={Connect} options={stackOptions} />
    <Stack.Screen name='feedback' component={Feedback} options={stackOptions} />
    {/* <Stack.Screen name='wallet' component={Wallet} options={stackOptions} /> */}
  </Stack.Navigator>
)
