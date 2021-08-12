import * as React from 'react'
import {
  Animated,
  Image,
  ImageStyle,
  SafeAreaView,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { Badge } from './badge'
import { color, images } from 'views/theme'
import { Ionicons } from '@expo/vector-icons'

// static styles
const SAFE_AREA: ViewStyle = {
  backgroundColor: color.tabbar,
}

const CONTAINER: ViewStyle = {
  backgroundColor: color.tabbar,
  flexDirection: 'row',
  justifyContent: 'center',
  minHeight: 49,
  // borderTopColor: color.palette.farmerOutline,
  // borderWidth: 1,
}

const TAB: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-end',
  flexDirection: 'column',
}

const ICON_WRAPPER: ViewStyle = {
  alignItems: 'center',
  flexGrow: 1,
  justifyContent: 'center',
}

const ICON: ViewStyle = {
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
}

const BADGE: ViewStyle = {
  position: 'absolute',
  left: 2,
  top: 8,
}

const ACTIVE_INDICATOR: ViewStyle = {
  position: 'absolute',
  bottom: 2,
  height: 4,
  width: 4,
  borderRadius: 2,
  backgroundColor: color.highlight,
  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowOpacity: 1,
  shadowRadius: 4,
  shadowColor: 'rgb(244,89,244)', //color.highlight,
}

const iconTabStyle: ImageStyle = {
  height: 28,
  width: 26,
  resizeMode: 'contain',
}

const ACTIVE_ICONS: any = {
  map: <Image source={images.mapActive} style={iconTabStyle} />,
  service: <Image source={images.serviceActive} style={iconTabStyle} />,
  inbox: <Image source={images.inboxActive} style={iconTabStyle} />,
  guild: <Image source={images.guildsActive} style={iconTabStyle} />,
  menu: <Image source={images.profileActive} style={iconTabStyle} />,
  balances: <Ionicons name='ios-wallet-outline' size={32} color='white' />,
  history: <Ionicons name='ios-list-circle-outline' size={32} color='white' />,
  send: (
    <Ionicons name='md-arrow-forward-circle-outline' size={32} color='white' />
  ),
  settings: <Ionicons name='ios-settings-sharp' size={32} color='white' />,
}

const ICONS: any = {
  map: <Image source={images.map} style={iconTabStyle} />,
  service: <Image source={images.service} style={iconTabStyle} />,
  inbox: <Image source={images.inbox} style={iconTabStyle} />,
  guild: <Image source={images.guilds} style={iconTabStyle} />,
  menu: <Image source={images.profile} style={iconTabStyle} />,
  balances: (
    <Ionicons
      name='ios-wallet-outline'
      size={32}
      color={color.palette.blueBell}
    />
  ),
  history: (
    <Ionicons
      name='ios-list-circle-outline'
      size={32}
      color={color.palette.blueBell}
    />
  ),
  send: (
    <Ionicons
      name='md-arrow-forward-circle-outline'
      size={32}
      color={color.palette.blueBell}
    />
  ),
  settings: (
    <Ionicons
      name='ios-settings-sharp'
      size={32}
      color={color.palette.blueBell}
    />
  ),
  // menu: (
  //   <Ionicons name='person-outline' size={32} color={color.palette.blueBell} />
  // ),
}

export const Tab = (props: any) => {
  const { route, index }: any = props
  const { jumpTo } = props.navigation
  const isActive = index === props.state.index
  const isInbox = route.routeName === 'inbox'

  return (
    <TouchableOpacity onPress={() => jumpTo(route.name)} style={TAB}>
      <View style={ICON_WRAPPER}>
        {isActive ? (
          <Animated.View style={[ICON]}>
            {ACTIVE_ICONS[route.name]}
          </Animated.View>
        ) : (
          <Animated.View style={[ICON]}>{ICONS[route.name]}</Animated.View>
        )}
        {isActive && <View style={ACTIVE_INDICATOR} />}
        {isInbox && <Badge style={BADGE} count={4} />}
      </View>
    </TouchableOpacity>
  )
}

export const TabBar = (props: any) => {
  const { routes } = props.state
  const inputRange = [-1, ...routes.map((x, i) => i)]

  return (
    <SafeAreaView style={SAFE_AREA}>
      <View style={CONTAINER}>
        {routes.map((route, index) => {
          const tabProps = {
            ...props,
            route,
            index,
            inputRange,
            key: route.name,
          }
          return <Tab {...tabProps} />
        })}
      </View>
    </SafeAreaView>
  )
}
