import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from 'storybook/views'
import { BalanceDetail } from '../balance-detail'

storiesOf('Wallet - BalanceDetail', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add(
    'In UseCase',
    () => (
      <Story>
        <UseCase text='Not fetched' usage='' noPad>
          <BalanceDetail
            balanceObj={{
              balance: 0,
              price: 0,
              symbol: 'ARCD',
              fetched: false,
            }}
          />
        </UseCase>
        <UseCase text='ARCD' usage='' noPad>
          <BalanceDetail
            balanceObj={{
              balance: 1500000,
              price: 0.0026,
              symbol: 'ARCD',
              fetched: true,
            }}
          />
        </UseCase>
        <UseCase text='No ARCD' usage='' noPad>
          <BalanceDetail
            balanceObj={{
              balance: 0,
              price: 0.0026,
              symbol: 'ARCD',
              fetched: true,
            }}
          />
        </UseCase>
        <UseCase text='BTC' usage='' noPad>
          <BalanceDetail
            balanceObj={{
              balance: 0.00012,
              price: 36245,
              symbol: 'BTC',
              fetched: true,
            }}
          />
        </UseCase>
        <UseCase text='No BTC' usage='' noPad>
          <BalanceDetail
            balanceObj={{
              balance: 0,
              price: 36245,
              symbol: 'BTC',
              fetched: true,
            }}
          />
        </UseCase>
        <UseCase text='USDC' usage='' noPad>
          <BalanceDetail
            balanceObj={{
              balance: 152.1234,
              price: 1,
              symbol: 'USDC',
              fetched: true,
            }}
          />
        </UseCase>
        <UseCase text='No USDC' usage='' noPad>
          <BalanceDetail
            balanceObj={{
              balance: 0,
              price: 1,
              symbol: 'USDC',
              fetched: true,
            }}
          />
        </UseCase>
      </Story>
    ),
    {
      notes:
        'BalanceDetail renders a View displaying information on a specific token such as icon, user balance, token price, value in dollars. Data is passed in as props: balanceObj of type Balance.',
    }
  )
