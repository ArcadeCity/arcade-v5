import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { View } from 'react-native'
import { Ceramic, Lightning, magic, provider } from '@arcadecity/core'
import { palette } from '../../theme'
import { ethers } from 'ethers'

const ceramic = new Ceramic()

export const WalletApp = () => {
  const [email, setEmail] = useState('')
  const [userMetadata, setUserMetadata] = useState<any>()
  const [lightningWallet, setLightningWallet] = useState<any>()
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const generateLightningWallet = async () => {
    const lightning = new Lightning()
    const wallet = await lightning.createWallet()
    console.log('Wallet created:', wallet)
    setLightningWallet(wallet)
  }

  const saveWalletToCeramic = async () => {
    const streamId = await ceramic.saveWallet(lightningWallet)
    console.log(streamId)
  }

  useMemo(async () => {
    if (userMetadata) {
      console.log('Authenticating with Ceramic...')
      const signer = provider.getSigner()
      const originalMessage = ''
      const signedMessage = await signer.signMessage(originalMessage)
      const thearray = ethers.utils.arrayify(signedMessage)
      ceramic.setup()
      ceramic.authenticate(thearray.slice(0, 32))
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
              <>
                <p style={{ color: 'white' }}>{lightningWallet.balance} sats</p>
                <button onClick={saveWalletToCeramic}>
                  Save wallet to Ceramic
                </button>
              </>
            ) : (
              <button onClick={generateLightningWallet}>
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
