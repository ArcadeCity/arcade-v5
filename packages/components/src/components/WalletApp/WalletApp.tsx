import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Button, Text, TextStyle, View } from 'react-native'
import { Ceramic, Lightning, magic, provider } from '@arcadecity/core'
import { palette } from '../../theme'
import { ethers } from 'ethers'

const ceramic = new Ceramic()

export const WalletApp = () => {
  const [email, setEmail] = useState('')
  const [userMetadata, setUserMetadata] = useState<any>()
  const [lightningWallet, setLightningWallet] = useState<any>()
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [isCeramicAuthed, setIsCeramicAuthed] = useState(false)

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
      const authed = await ceramic.authenticate(thearray.slice(0, 32))
      setIsCeramicAuthed(authed)
      console.log('Checking for wallet:')
      const wallet: any = await ceramic.checkForWallet()
      if (wallet) {
        setLightningWallet({ ...wallet, fromCeramic: true })
      }
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
      <View
        style={{
          flex: 1,
          backgroundColor: palette.purple,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={{ width: 500 }}>
          <Text style={TEXT}>Demo: Magic+Ceramic+Lightning wallet</Text>
          <a href='https://github.com/ArcadeCity/arcade' target='_blank'>
            <Text style={TEXT}>[Source]</Text>
          </a>

          {userMetadata ? (
            <View style={{ marginVertical: 30 }}>
              <Text style={TEXT}>Magic info:</Text>
              <Text style={TEXT}>{userMetadata.email}</Text>
              <Text style={TEXT}>{userMetadata.publicAddress}</Text>
              {lightningWallet ? (
                <View style={{ marginTop: 30 }}>
                  <Text style={TEXT}>Lightning info:</Text>
                  <Text style={{ ...TEXT, fontWeight: 'bold' }}>
                    {lightningWallet.chain}
                  </Text>
                  <Text style={{ ...TEXT, fontWeight: 'bold' }}>
                    LNDHub userid:{' '}
                    {lightningWallet.secret.split(':')[1].slice(2)}
                  </Text>
                  {lightningWallet.fromCeramic && (
                    <Text style={TEXT}>Loaded from Ceramic</Text>
                  )}
                  <View style={{ marginTop: 30 }} />
                  {!lightningWallet.fromCeramic && (
                    <Button
                      onPress={saveWalletToCeramic}
                      disabled={!isCeramicAuthed}
                      color={palette.electricIndigo}
                      title='Save wallet to Ceramic'
                    />
                  )}
                </View>
              ) : (
                <Button
                  onPress={generateLightningWallet}
                  title='Create Lightning wallet'
                  color={palette.electricIndigo}
                />
              )}
            </View>
          ) : (
            <div style={{ color: 'white' }}>
              <View style={{ marginVertical: 30 }}>
                <input
                  type='email'
                  name='email'
                  required={true}
                  placeholder='Enter your email'
                  onChange={handleInputOnChange}
                  disabled={isLoggingIn}
                />
              </View>
              <Button
                onPress={login}
                disabled={isLoggingIn}
                title='Send'
                color={palette.electricIndigo}
              />
            </div>
          )}
        </View>
      </View>
    </React.StrictMode>
  )
}

const TEXT: TextStyle = {
  color: 'white',
  fontFamily: 'monospace',
  marginVertical: 3,
}
