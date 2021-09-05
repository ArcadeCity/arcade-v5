import React from 'react'
import { View } from 'react-native'
import { Button } from 'views/shared'
import { translate } from 'i18n'
import { capitalize } from 'lodash'

export const WalletDock = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <Button
        preset='primary'
        text={capitalize(translate('service.request'))}
      />
      {/* @TODO missing translation for 'Pay' */}
      <Button preset='purpleglow' text='Pay' />
      {/* @TODO missing translation for 'Trade' */}
      <Button preset='secondary' text='Trade' />
    </View>
  )
}
