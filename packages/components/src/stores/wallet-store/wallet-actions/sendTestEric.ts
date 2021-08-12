import { display } from 'lib'
import { WalletStore } from '../wallet-store'

export const sendTestEric = async (self: WalletStore) => {
  const res = await fetch(
    'https://ac-5-n-tvvcl.ondigitalocean.app/send/1000/GoB1QVg7xhE3cRT16cSNkA41fE8XDcbPRWygsgaQCEae/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/spawn%20illness%20sun%20thrive%20despair%20huge%20sunny%20velvet%20fatigue%20police%20fetch%20similar'
  )

  display({
    name: 'sendTestEric',
    preview: 'Returned from fetch with response:',
    value: res,
  })

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
