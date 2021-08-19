// @ts-nocheck
import { Alert } from 'react-native'
// import { LightningWallet, LightningWalletModel } from 'stores/wallet-store'
import { LightningCustodianWallet } from './lightning-custodian-wallet'

export class Lightning {
  arcadehub: any

  constructor() {
    this.arcadehub = {}
  }

  async setup() {
    console.log('Lightning setup')
    return true
  }

  async createWallet() {
    let wallet = new LightningCustodianWallet()
    wallet.setLabel('Test LN wallet 1')

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
      await wallet.createAccount()
      await wallet.authorize()
    } catch (Err) {
      // setIsLoading(false)
      console.warn('lnd create failure', Err)
      return Alert.alert(Err)
      // giving app, not adding anything
    }
    // A(A.ENUM.CREATED_LIGHTNING_WALLET)
    await wallet.generate()
    // addWallet(wallet)
    // await saveToDisk()

    // A(A.ENUM.CREATED_WALLET)
    // ReactNativeHapticFeedback.trigger('notificationSuccess', {
    //   ignoreAndroidSystemSettings: false,
    // })
    // navigate('PleaseBackupLNDHub', {
    //   walletID: wallet.getID(),
    // })

    // const lightningWallet: LightningWallet = LightningWalletModel.create({
    //   accessToken: wallet.access_token,
    //   balance: wallet.balance,
    //   balanceUnconfirmed: wallet.unconfirmed_balance,
    //   baseUri: wallet.baseURI,
    //   chain: wallet.chain,
    //   createdAt: new Date(),
    //   label: wallet.label,
    //   pendingTransactionsRaw: wallet.pending_transactions_raw,
    //   refreshToken: wallet.refresh_token,
    //   secret: wallet.secret,
    //   userHasSavedExport: wallet.userHasSavedExport,
    //   userInvoicesRaw: wallet.user_invoices_raw,
    // })

    return wallet
    // return lightningWallet
  }
}
