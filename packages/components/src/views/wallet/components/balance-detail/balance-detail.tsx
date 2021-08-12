import React from 'react'
import { Image, View, ViewStyle } from 'react-native'
import { COINS } from 'lib/coins'
import { numberWithCommas } from 'lib/util'
import { Balance } from 'stores/wallet-store'
import { Text } from 'views/shared'
import { images } from 'views/theme'

export const BalanceDetail = ({ balanceObj }: { balanceObj: Balance }) => {
  const { balance, fetched, price, symbol } = balanceObj // ?
  const totalPrice = numberWithCommas((balance * price).toFixed(2))
  const coin = COINS[symbol]

  if (!fetched) return null

  return (
    <View style={CONTAINER}>
      {/* Left align */}
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={images[symbol]}
          style={{ width: 50, height: 55, marginRight: 15 }}
          resizeMode='contain'
        />
        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
          <Text text={coin.name} preset='bold' />
          <Text text={`$${price}`} preset='descriptionSlim' />
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
          <Text text={`${balance} ${symbol}`} preset='bold' />
        </View>
        <Text text={`$${totalPrice}`} preset='descriptionSlim' />
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
