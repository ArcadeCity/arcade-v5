import React from 'react'
import { Button, View } from 'react-native'
import { palette } from '../../views/theme/palette'

export const CityWeb = () => {
  return (
    <View
      style={{
        backgroundColor: palette.haiti,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button onPress={() => {}} title='Test' />
    </View>
  )
}
