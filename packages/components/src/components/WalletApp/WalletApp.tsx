import React from 'react'
import { View } from 'react-native'
import { palette } from '../../theme'
import { magic } from '@arcadecity/core'

export const WalletApp = () => {
  console.log('magic:', magic)
  return (
    <React.StrictMode>
      <View style={{ flex: 1, backgroundColor: palette.purple }}></View>
    </React.StrictMode>
  )
}
