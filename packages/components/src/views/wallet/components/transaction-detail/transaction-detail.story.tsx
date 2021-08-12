import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from 'storybook/views'
import { TransactionDetail } from '../transaction-detail'
import { Transaction } from 'stores/wallet-store'

const tx: Transaction = {
  id: 1,
  amount: 0.05,
  description: 'Dummy tx',
  type: 'test',
  timestamp: new Date(),
}

storiesOf('Wallet - TransactionDetail', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('In UseCase', () => (
    <Story>
      <UseCase text='TransactionDetail' usage='' noPad>
        <TransactionDetail tx={tx} />
      </UseCase>
    </Story>
  ), {
    notes: 'TransactionDetail renders a View containing information about a transaction such as time since execution, amount, description, and type of transaction. Data is passed in as props: tx of type Transaction.'
  })
