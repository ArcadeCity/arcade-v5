import React from 'react'
import { View } from 'react-native'
import { observer } from 'mobx-react-lite'
import { useStores } from 'stores'
import { Button, Screen, Text, TextField } from 'views/shared'
import { spacing } from 'views/theme'

export const Pay = observer(() => {
  const { walletStore } = useStores()
  return (
    <Screen
      preset='fixed'
      style={{
        padding: spacing[4],
        width: '100%',
      }}
    >
      {/* @TODO missing translation for 'To' */}
      <Text preset='descriptionSlim' text='To' />
      <TextField
        // @TODO missing translation for 'Username'
        placeholder='Username'
        style={{ width: '100%', marginBottom: spacing[3] }}
      />
      {/* @TODO missing translation for "For" */}
      <Text preset='descriptionSlim' text='For' />
      <TextField
        // @TODO missing translation for 'Pizza last night'
        placeholder='Pizza last night'
        style={{ width: '100%', marginBottom: spacing[3] }}
      />
      {/* @TODO missing translation for 'Pay' */}
      <Button text='Pay' onPress={walletStore.pay} />
    </Screen>
  )
})
