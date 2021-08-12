import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Button } from 'views/shared'
import { Icon } from '../icon'

export const WalletButton = () => {
  const { navigate } = useNavigation()
  const route = useRoute()
  if (route.name === 'placeholder') return null
  return (
    <Button preset='small' icon onPress={() => navigate('wallet')}>
      <Icon fontAwesome='bank' />
    </Button>
  )
}
