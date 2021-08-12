import { delay } from 'lib/delay'
import { WalletStore } from '../wallet-store'

export const sendTest = async (self: WalletStore) => {
  const solana = self.env.solana

  fetch(
    'https://ac-5-n-tvvcl.ondigitalocean.app/send/10000/5SuWhGq71ArD9iD5t3evdieJYLjerWpGANZYh3BwTx53/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/spawn%20illness%20sun%20thrive%20despair%20huge%20sunny%20velvet%20fatigue%20police%20fetch%20similar'
  )

  await delay(1000)
  const accounts = await solana.getTokenAccounts()
  self.setTokenAccounts(accounts)

  await delay(1000)
  const accounts2 = await solana.getTokenAccounts()
  self.setTokenAccounts(accounts2)

  return true
  // const from = self.ourTokenAccounts().filter((e) => e.name === 'USD Coin')[0]

  // display({
  //   name: 'sendTest',
  //   preview: `ourTokenAccounts`,
  //   value: from,
  // })

  // await solana.transferTokens(from.publicKey, from.mint)

  // const sourcePublicKey = await solana.myAssociatedTokenAddress('USDC')

  // (
  //   fromAccount.publicKey,
  //   new PublicKey(USDC_ADDRESS)
  // )

  // const resp = await solana.connection.getRecentBlockhashAndContext()

  // display({
  //   name: 'sendTest',
  //   preview: `getRecentBlockhashAndContext`,
  //   value: resp,
  // })
}
