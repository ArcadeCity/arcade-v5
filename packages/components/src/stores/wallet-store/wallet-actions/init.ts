import { display, log } from 'lib'
import { WalletStore } from '../wallet-store'

export const init = async (self: WalletStore) => {
  const wallet: any =
    checkForWallet() ?? (await self.env.lightning.createWallet())

  if (!!wallet && wallet.isNew) {
  }

  display({
    name: 'walletStore init',
    preview: 'Wallet object:',
    value: wallet,
  })
  return true
}

// Check storage for wallet.
const checkForWallet = () => {
  return null
}
