import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useStores } from 'stores'
import { Button, Screen, Text } from 'views/shared'
import { ceramicTest } from './ceramicTest'

export const Placeholder = () => {
  const { setOptions } = useNavigation()
  const { walletStore } = useStores()
  useEffect(() => {
    setOptions({ title: 'Wallet Demo' })
  }, [])
  return (
    <Screen preset='fixedStack'>
      <Text
        text='0 sats'
        preset='title'
        style={{ marginTop: 45, textAlign: 'center' }}
      />
      <Button
        text='Init wallet'
        style={{ marginVertical: 35 }}
        onPress={walletStore.init}
      />
      <Button
        text='Ceramic test'
        style={{ marginVertical: 35 }}
        onPress={ceramicTest}
      />
      <Button text='Give me sats' style={{ marginTop: 35 }} />
    </Screen>
  )
}
