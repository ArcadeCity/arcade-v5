import React, { useEffect } from 'react'
import { View, ViewStyle } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useStores } from 'stores'
import { Button, Screen, Text } from 'views/shared'
import { spacing } from 'views/theme'
import { CONTAINER } from './styles'

export const Terms: React.FC<{}> = () => {
  // Nav
  const { canGoBack, goBack, setOptions } = useNavigation()
  useEffect(() => {
    setOptions({ title: 'Accept Terms' })
  }, [])

  // State
  const { authStore } = useStores()

  // UI
  const dock = (
    <View style={{ padding: 20 }}>
      <Button
        style={FB_BUTTON}
        tx='onboarding.termsAgree'
        onPress={() => {
          authStore.saveTermsAgree(new Date())
          if (canGoBack()) {
            goBack()
          }
        }}
      />
    </View>
  )
  return (
    <Screen preset='scrollStack' dock={dock}>
      <View style={CONTAINER}>
        <Text preset='title' tx='onboarding.terms' style={{ marginTop: 30 }} />

        <Text
          preset='description'
          tx='onboarding.termsExplainer'
        />

        <Text preset='description' tx='onboarding.terms1' />

        <Text
          preset='description'
          tx='onboarding.terms2'
        />

        <Text
          preset='description'
          tx='onboarding.terms3'
        />

        <Text
          preset='description'
          tx='onboarding.terms4'
        />

        <Text
          preset='description'
          tx='onboarding.termsWarn'
        />
      </View>
    </Screen>
  )
}

const FB_BUTTON: ViewStyle = {
  marginTop: spacing[1],
  marginBottom: spacing[6],
}
