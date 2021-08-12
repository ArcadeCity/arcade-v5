import React from 'react'
import { FlatList } from 'react-native'
import { Transaction } from 'stores/wallet-store'
import { TransactionDetail } from '../transaction-detail'

interface Props {
  transactions: Transaction[]
}

export const Transactions = ({ transactions }: Props) => {
  let flatList: any
  return (
    <FlatList
      initialNumToRender={25}
      ref={(elm) => (flatList = elm)}
      data={transactions}
      onContentSizeChange={() => flatList.scrollToEnd()}
      renderItem={({ item: tx }) => <TransactionDetail tx={tx} />}
      keyExtractor={(tx) => tx.id.toString()}
      style={{ maxWidth: '100%' }}
    />
  )
}
