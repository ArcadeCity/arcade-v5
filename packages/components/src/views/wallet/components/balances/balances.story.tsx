import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from 'storybook/views'
import { Balances } from '../balances'
import { Balances as BalancesType } from 'stores/wallet-store'

export const balances: BalancesType = {
  ARCD: {
    balance: 1000,
    price: 0.0026,
    fetched: true,
    symbol: 'ARCD',
  },
  BTC: {
    balance: 0.0013,
    price: 35612,
    fetched: true,
    symbol: 'BTC',
  },
  USDC: {
    balance: 516,
    price: 1,
    fetched: true,
    symbol: 'USDC',
  },
}

storiesOf('Wallet - Balances', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('In UseCase', () => (
    <Story>
      <UseCase text='Balances' usage='' noPad>
        <Balances balances={balances} />
      </UseCase>
    </Story>
  ), {
    notes: 'Balances renders a BalanceDetail component for ARCD, BTC, and USDC with the user balances. Data is passed in as props: balances of type Balances.'
  })
