import * as React from 'react'
import { View } from 'react-native'
import { Text } from 'views/shared'
import { color } from 'views/theme'

interface Props {
  headline: string
  text: string
}

export const UpdatedModal = ({ headline, text }: Props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 300,
        backgroundColor: color.background,
      }}
    >
      <Text preset='title' text={headline} />
      <Text preset='title2' text={text} />
    </View>
  )
}
