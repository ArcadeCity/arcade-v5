import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { useStores } from 'stores'
import { Button, Screen, Text, TextField } from 'views/shared'
import { spacing } from 'views/theme'

export const SetBio: React.FC<{}> = observer(() => {
  // Nav
  const { goBack, setOptions } = useNavigation()
  useEffect(() => {
    setOptions({ title: 'Set Your Bio' })
  }, [])

  // State
  const { authStore } = useStores()
  const bio = authStore.bio
  const saveBio = authStore.saveBio

  // Form
  const { register, handleSubmit, setValue } = useForm()
  const [field, setField] = useState('')
  const submitBio = async ({ bio }: any) => {
    saveBio(bio)
    goBack()
  }
  useEffect(() => {
    register('bio')
    setValue('bio', bio)
    setField(bio ?? '')
  }, [register])

  return (
    <Screen preset='fixedStack'>
      <Text preset='title' tx='onboarding.setBio' style={{ paddingTop: 40 }} />
      <Text preset='description' tx='onboarding.setBioExplainer' />
      <TextField
        multiline
        value={field}
        autoFocus={true}
        onChangeText={(text) => {
          setValue('bio', text)
          setField(text)
        }}
        inputStyle={{ height: 150, padding: spacing[3] }}
      />
      <Button onPress={handleSubmit(submitBio)} tx='common.submit' />
    </Screen>
  )
})
