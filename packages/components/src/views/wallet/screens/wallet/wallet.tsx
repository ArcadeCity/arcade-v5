import React from 'react'
import { values } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useStores } from 'stores'
import { Transaction } from 'stores/wallet-store'
import { Screen, Text } from 'views/shared'
import { spacing } from 'views/theme'
import { Balances, Transactions, WalletDock } from 'views/wallet'

export const Wallet = observer(() => {
  const { walletStore } = useStores()
  const balances = walletStore.balances
  const transactions = walletStore.transactions
  const txArray = values(transactions) as Transaction[]
  return (
    <Screen
      preset='fixed'
      style={{
        padding: spacing[4],
      }}
      dock={<WalletDock />}
    >
      {/* @TODO missing translation for 'Balances' */}
      <Text preset='sectionHeader' text='Balances' />
      <Balances balances={balances} />
      <Text
        preset='sectionHeader'
        // @TODO missing translation for 'Transactions'
        text='Transactions'
        style={{ marginTop: spacing[5] }}
      />
      <Transactions transactions={txArray} />
    </Screen>
  )
})
