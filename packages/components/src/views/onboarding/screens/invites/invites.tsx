import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { useStores } from 'stores'
import { Button, Screen, Text, TextField } from 'views/shared'
import { spacing } from 'views/theme'
import { translate } from 'i18n'

export const Invites = () => {
  // Nav
  const { goBack, setOptions } = useNavigation()

  useEffect(() => {
    setOptions({ title: 'Invites' })
  }, [])

  // State
  const { authStore } = useStores()
  const invites = authStore.invites

  // Form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()
  const [field, setField] = useState('')
  const submitInvite = async ({ inviteEmail }: any) => {
    const save = await authStore.saveInvite(inviteEmail, 'Test')
    if (save) {
      goBack()
    }
  }
  useEffect(() => {
    register('inviteEmail', {
      required: 'Email required',
      pattern: { value: /^\S+@\S+$/i, message: 'Not an email address' },
    })
    // setValue('bio', bio)
    // setField(bio ?? '')
  }, [register])

  const isError = !!errors.inviteEmail?.message

  return (
    <Screen preset='fixedStack' key={authStore?.locale} >
      <Text preset='title' tx='onboarding.sendInvite' style={{ paddingTop: 40 }} />
      <Text preset='description' tx='comms.inviteCount' txOptions={{ invites }} text={`You have ${invites} invites.`} />
      <TextField
        value={field}
        // autoFocus={true}
        placeholder={translate('onboarding.emailAddressToInvite')}
        onChangeText={(text) => {
          setValue('inviteEmail', text)
          setField(text)
        }}
        inputStyle={{ padding: spacing[3] }}
      />

      {isError && (
        <Text
          preset='error'
          text={errors.inviteEmail?.message}
          style={{ marginBottom: spacing[5] }}
        />
      )}

      <Button
        onPress={handleSubmit(submitInvite)}
        tx='common.submit'
        disabled={!invites}
      />
    </Screen>
  )
}
