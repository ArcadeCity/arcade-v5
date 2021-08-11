import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { View } from 'react-native'
import { Ceramic, Lightning, magic, provider } from '@arcadecity/core'
import { palette } from '../../theme'
import { ethers } from 'ethers'

export const WalletApp = () => {
  const [email, setEmail] = useState('')
  const [userMetadata, setUserMetadata] = useState<any>()
  const [lightningWallet, setLightningWallet] = useState<any>()
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const generateLightningWallet = async () => {
    const lightning = new Lightning()
    console.log('Lets generate a lightning wallet')
    const wallet = await lightning.createWallet()
    console.log('wallet:', wallet)
    setLightningWallet(wallet)
  }

  useMemo(async () => {
    if (userMetadata) {
      console.log('Now lets auth ceramic')
      const ceramic = new Ceramic()

      const signer = provider.getSigner()
      // const address = await signer.getAddress()
      const originalMessage = ''
      const signedMessage = await signer.signMessage(originalMessage)

      // const messageHash = ethers.utils.id('Hello World')
      // console.log('messageHash:', messageHash)
      const dis = ethers.utils.arrayify(signedMessage)
      console.log('DIS', dis)

      // let flatSig = await signer.signMessage(dis)
      // console.log(flatSig)

      // const wat = Buffer.from(flatSig)
      // console.log(wat)

      ceramic.setup()
      ceramic.authenticate(dis.slice(0, 32))

      // console.log('signedMessage:', signedMessage)

      // const encoder = new TextEncoder()
      // const sha = await sha256(signedMessage)
      // console.log('sha:', sha)
      // const seed = encoder.encode(sha)
      // console.log(seed)
      // console.log(seed.length)

      // const wat = Buffer.from(signedMessage)
      // console.log(wat)
      // console.log(wat.length)

      // console.log('signedMessage:', signedMessage)
      // console.log(ceramic)
    }
  }, [userMetadata])

  useEffect(() => {
    if (!magic) return
    magic.user.isLoggedIn().then((magicIsLoggedIn) => {
      if (magicIsLoggedIn) {
        magic.user.getMetadata().then(setUserMetadata)
      }
    })
  }, [magic])

  /**
   * Perform login action via Magic's passwordless flow. Upon successuful
   * completion of the login flow, a user is redirected to the homepage.
   */
  const login = useCallback(async () => {
    setIsLoggingIn(true)

    try {
      await magic.auth.loginWithMagicLink({
        email,
      })
      const user = await magic.user.getMetadata()
      setUserMetadata(user)
    } catch {
      setIsLoggingIn(false)
    }
  }, [email])

  const handleInputOnChange = useCallback((event) => {
    setEmail(event.target.value)
  }, [])

  return (
    <React.StrictMode>
      <View style={{ flex: 1, backgroundColor: palette.purple }}>
        {userMetadata ? (
          <>
            <p style={{ color: 'white' }}>{userMetadata.email}</p>
            <p style={{ color: 'white' }}>{userMetadata.publicAddress}</p>
            {lightningWallet ? (
              <p style={{ color: 'white' }}>{lightningWallet.balance} sats</p>
            ) : (
              <button onClick={generateLightningWallet} disabled={isLoggingIn}>
                Create Lightning wallet
              </button>
            )}
          </>
        ) : (
          <div style={{ color: 'white' }}>
            <h1>Please sign up or login</h1>
            <input
              type='email'
              name='email'
              required={true}
              placeholder='Enter your email'
              onChange={handleInputOnChange}
              disabled={isLoggingIn}
            />
            <button onClick={login} disabled={isLoggingIn}>
              Send
            </button>
          </div>
        )}
      </View>
    </React.StrictMode>
  )
}
