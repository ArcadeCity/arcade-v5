import { Instance, SnapshotOut, types } from 'mobx-state-tree'
import { PublicKey } from '@solana/web3.js'
import { withEnvironment, withRootStore } from 'stores/_extensions'
import * as actions from './wallet-actions'
import { BalancesModel, TransactionModel } from './wallet-models'
import { Alert } from 'react-native'

export const WalletStoreModel = types
  .model('WalletStore')
  .props({
    balances: types.optional(BalancesModel, {}),
    tokenAccounts: types.frozen(),
    transactions: types.map(TransactionModel),
  })
  .extend(withEnvironment)
  .extend(withRootStore)
  .actions((self) => ({
    init: async (): Promise<boolean> => await actions.init(self as WalletStore),
    pay: async () => Alert.alert('Pay via store'),
    setTokenAccounts(accounts: any) {
      self.tokenAccounts = accounts
    },
    setTransactions(transactions: any) {
      self.transactions = transactions
    },
    reset() {
      self.tokenAccounts = undefined
      self.transactions = undefined
    },
  }))
  .views((self) => ({
    ourTokenAccounts: () => {
      if (!self.tokenAccounts) return []
      return self.tokenAccounts
        .map(
          ({ parsed, publicKey }: { parsed: any; publicKey: PublicKey }) => ({
            amount: parsed.amount,
            name: mintNames[parsed.mint.toString()]?.name ?? '',
            decimals: mintNames[parsed.mint.toString()]?.decimals ?? '',
            mint: parsed.mint,
            // owner: parsed.owner.toString(),
            publicKey,
          })
        )
        .filter(function (e) {
          return e.name === 'Arcade Token' || e.name === 'USD Coin'
        })
        .sort((a, b) => (a.name > b.name ? 1 : -1))
    },
  }))

const mintNames = {
  '4wTMJsh3q66PmAkmwEW47qVDevMZMVVWU3n1Yhqztwi6': {
    name: 'Arcade Token',
    decimals: 9,
  },
  EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v: {
    name: 'USD Coin',
    decimals: 6,
  },
}

type WalletStoreType = Instance<typeof WalletStoreModel>
export interface WalletStore extends WalletStoreType {}
type WalletStoreSnapshotType = SnapshotOut<typeof WalletStoreModel>
export interface WalletStoreSnapshot extends WalletStoreSnapshotType {}
export const createWalletStoreDefaultModel = () =>
  types.optional(WalletStoreModel, {})
