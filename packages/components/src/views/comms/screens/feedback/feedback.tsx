import React, { useEffect } from 'react'
import { Alert, View, ViewStyle } from 'react-native'
import { observer } from 'mobx-react-lite'
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { useStores } from 'stores'
import { Button, Screen, Text, TextField } from 'views/shared'
import { spacing } from 'views/theme'

export const Feedback: React.FC<{}> = observer(() => {
  // Nav
  const { goBack, setOptions } = useNavigation()
  useEffect(() => {
    setOptions({ title: 'Feedback' })
  }, [])

  // State
  const { authStore } = useStores()

  // Form
  const { register, handleSubmit, setValue } = useForm()
  useEffect(() => {
    register('text')
  }, [register])

  const submitThat = async ({ text }: any) => {
    authStore.submitFeedback(text)
    Alert.alert('Thank you!')
    goBack()
  }

  return (
    <Screen
      preset='scrollStack'
      dock={
        <View style={DOCK}>
          <Button
            style={BUTTON}
            preset='primary'
            tx='common.submit'
            onPress={handleSubmit(submitThat)}
          />
        </View>
      }
    >
      <View style={CONTAINER}>
        <Text preset='title' tx='comms.giveUsFeedback' />
        <Text preset='description' tx='comms.feedbackExplainer' />
        <TextField
          // placeholderTx='menu.addFeedbackHere'
          multiline={true}
          inputStyle={{
            height: 150,
            paddingTop: 15,
            paddingBottom: 15,
            paddingRight: 15,
            paddingLeft: 15,
          }}
          onChangeText={(text: string) => setValue('text', text)}
        />
      </View>
    </Screen>
  )
})

const DOCK: ViewStyle = {
  paddingHorizontal: spacing[4],
  paddingVertical: spacing[4],
}

const BUTTON: ViewStyle = {
  marginVertical: spacing[2],
}

const CONTAINER: ViewStyle = {
  paddingBottom: spacing[7],
  paddingTop: spacing[5],
}
