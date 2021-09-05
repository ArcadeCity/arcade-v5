import React from 'react'
import { View, ViewStyle } from 'react-native'
import { Text } from 'views/shared'
import { color } from 'views/theme'

export const NoLocationOverlay = () => (
  <View style={DRIVEROVERLAY}>
    <Text tx='map.waitingForLocation' preset='title3' />
  </View>
)

const CONTAINER: ViewStyle = {
  position: 'absolute',
  bottom: 70,
  left: 25,
  right: 25,
  justifyContent: 'center',
  alignItems: 'center',
}

const DRIVEROVERLAY: ViewStyle = {
  ...CONTAINER,
  bottom: 50,
  backgroundColor: color.background,
  borderRadius: 8,
  padding: 0,
  shadowOpacity: 0.8,
  shadowRadius: 12,
  shadowColor: 'rgba(91, 32, 242, 0.2)',
  shadowOffset: {
    width: 0,
    height: 0,
  },
  borderWidth: 2,
  borderColor: color.palette.portGore,
}
