import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { useStores } from 'stores'
import { Button, Screen, Text, TextField } from 'views/shared'

export const SetUsername: React.FC<{}> = observer(() => {
  // Nav
  const { goBack, setOptions } = useNavigation()
  useEffect(() => {
    setOptions({ title: 'Select Username' })
  }, [])

  // State
  const { authStore } = useStores()
  const username = authStore.username

  // Form
  const { register, handleSubmit, setValue } = useForm()
  const [field, setField] = useState('')
  const submitUsername = async ({ username }: any) => {
    authStore.saveUsername(username)
    goBack()
  }
  useEffect(() => {
    register('username')
    setValue('username', username)
    setField(username ?? '')
  }, [register])

  return (
    <Screen preset='fixedStack'>
      <Text
        preset='title'
        tx='onboarding.setUsername'
        style={{ paddingTop: 40 }}
      />
      <Text preset='description' tx='onboarding.setUsernameExplainer' />
      <TextField
        value={field}
        autoFocus={true}
        onChangeText={(text) => {
          setValue('username', text)
          setField(text)
        }}
      />
      <Button onPress={handleSubmit(submitUsername)} tx='common.submit' />
    </Screen>
  )
})
