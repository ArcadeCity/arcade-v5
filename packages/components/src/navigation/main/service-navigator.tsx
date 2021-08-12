import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useStores } from 'stores'
import { ModalName } from 'stores/modal-store'
import { Button, NavButton, WalletButton } from 'views/shared'
import { color, typography } from 'views/theme'
import { RequestChat, ServiceHome } from 'views/service'
import { NavigationProp, RouteProp } from '@react-navigation/native'

interface Props {
  navigation: NavigationProp<any>
  route: RouteProp<any, any>
}

const Stack = createStackNavigator()

export const ServiceNavigator: React.FC<{}> = () => {
  const { modalStore } = useStores()
  const stackOptions = ({ navigation, route }: Props) => ({
    headerStyle: {
      backgroundColor: color.tabbar,
      elevation: 0,
      // borderBottomColor: '#000',
      shadowColor: 'transparent',
    },
    headerTintColor: color.palette.white,
    headerTitleStyle: {
      fontFamily: typography.bold,
    },
    headerLeft: () => (
      <NavButton onPress={navigation.goBack} navigation={navigation} />
    ),
    headerRight:
      route.name === 'requestChat' ? (
        () => (
          <Button
            preset='small'
            text='View'
            onPress={() => modalStore.openModal(ModalName.REQUEST_VIEW, {})}
          />
        )
      ) : (
        <WalletButton />
      ),
  })
  return (
    <Stack.Navigator initialRouteName='serviceHome' headerMode='screen'>
      <Stack.Screen
        name='serviceHome'
        component={ServiceHome}
        options={stackOptions}
      />
      <Stack.Screen
        name='requestChat'
        component={RequestChat}
        options={stackOptions}
      />
    </Stack.Navigator>
  )
}
