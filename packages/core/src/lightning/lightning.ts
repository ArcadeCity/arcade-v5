import { Alert } from 'react-native'
import { LightningCustodianWallet } from './lightning-custodian-wallet'

export { LightningCustodianWallet }

export class Lightning {
  async createWallet() {
    let wallet = new LightningCustodianWallet({})
    wallet.setLabel('Test LN Wallet')

    try {
      const lndhub = 'https://hub1.arcade.city'
      if (lndhub) {
        const isValidNodeAddress =
          await LightningCustodianWallet.isValidNodeAddress(lndhub)
        if (isValidNodeAddress) {
          wallet.setBaseURI(lndhub)
          wallet.init()
        } else {
          throw new Error('The provided node address is not valid LNDHub node.')
        }
      }
      await wallet.createAccount(false)
      await wallet.authorize()
    } catch (Err) {
      console.warn('lnd create failure', Err)
      return Alert.alert(Err)
    }

    return wallet
  }
}
