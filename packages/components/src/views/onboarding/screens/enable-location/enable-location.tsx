import React, { useEffect } from 'react'
import { Image, ImageStyle, View, ViewStyle } from 'react-native'
import { observer } from 'mobx-react-lite'
import { useNavigation } from '@react-navigation/native'
import { useStores } from 'stores'
import { Button, Screen, Text } from 'views/shared'
import { spacing } from 'views/theme'

export const EnableLocation = observer(() => {
  // Nav
  const { goBack, setOptions } = useNavigation()
  useEffect(() => {
    setOptions({ title: 'Enable Location' })
  }, [])

  // State
  const { authStore } = useStores()

  return (
    <Screen
      preset='scrollStack'
      dock={
        <View style={DOCK}>
          <Button
            style={BUTTON}
            preset='primary'
            tx='onboarding.enableLocation'
            onPress={async () => {
              authStore.getLocation()
              goBack()
            }}
          />
        </View>
      }
    >
      <View style={CONTAINER}>
        <Text preset='title' tx='onboarding.enableLocation' />
        <Text
          preset='description'
          tx='onboarding.enableLocationExplainer1'
        />
        <Text
          preset='description'
          tx='onboarding.enableLocationExplainer2'
        />
        <Text
          preset='description'
          tx='onboarding.enableLocationExplainer3'
        />
        <Image source={require('./location.png')} style={IMAGE} />
      </View>
    </Screen>
  )
})

const CONTAINER: ViewStyle = {
  paddingVertical: spacing[7],
}

const DOCK: ViewStyle = {
  paddingHorizontal: spacing[4],
  paddingVertical: spacing[4],
}

const BUTTON: ViewStyle = {
  marginVertical: spacing[2],
}

const IMAGE: ImageStyle = {
  alignSelf: 'center',
  marginTop: 50,
}
