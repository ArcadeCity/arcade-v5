import React from 'react'
import { observable, values } from 'mobx'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from 'storybook/views'
import { Transaction } from 'stores/wallet-store'
import { Transactions } from '../transactions'

const tx: Transaction = {
  id: 1,
  amount: 0.05,
  description: 'Dummy tx',
  type: 'test',
  timestamp: new Date(),
}

const tx2: Transaction = {
  id: 2,
  amount: 18.0135,
  description: 'Dummy tx 2',
  type: 'test',
  timestamp: new Date(),
}

const txs: any = observable.map({ '1': tx, '2': tx2 })
const txArray = values(txs) as Transaction[]

storiesOf('Wallet - Transactions', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('In UseCase', () => (
    <Story>
      <UseCase text='Transactions' usage='' noPad>
        <Transactions transactions={txArray} />
      </UseCase>
    </Story>
  ), {
    notes: 'Transactions renders a Flatlist of TransactionDetails. Data is passed in as props: transactions of type Transaction[].'
  })
