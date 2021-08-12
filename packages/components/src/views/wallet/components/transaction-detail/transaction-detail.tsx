import React from 'react'
import { Image, View, ViewStyle } from 'react-native'
import { Transaction } from 'stores/wallet-store'
import { Text } from 'views/shared'
import { images } from 'views/theme'
import { DateTime } from 'luxon'

export const TransactionDetail = ({ tx }: { tx: Transaction }) => {
  const { amount, description, id, timestamp, type } = tx // ?
  const iso = DateTime.fromISO(timestamp.toISOString())
  return (
    <View style={CONTAINER} key={id}>
      {/* Left align */}
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={images[`tx-${type}`]}
          style={{ width: 50, height: 55, marginRight: 15 }}
          resizeMode='contain'
        />
        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
          <Text text={iso.toRelative()} preset='bold' />
          <Text text={description} preset='descriptionSlim' />
        </View>
      </View>
      {/* Right align */}
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text text={amount.toString()} preset='bold' />
        </View>
      </View>
    </View>
  )
}

const CONTAINER: ViewStyle = {
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-between',
  marginVertical: 10,
}
