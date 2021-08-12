import React from 'react'
import { ImageBackground, ImageStyle } from 'react-native'
import { images } from 'views/theme'

export const LoadSplash = () => (
  <ImageBackground source={images.splash} style={CITYIMAGE} />
)

const CITYIMAGE: ImageStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  zIndex: 1,
  height: '100%',
  resizeMode: 'cover',
}
