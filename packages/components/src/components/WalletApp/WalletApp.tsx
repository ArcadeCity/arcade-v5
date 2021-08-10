import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { View } from 'react-native'
import { Ceramic, magic } from '@arcadecity/core'
import { palette } from '../../theme'

export const WalletApp = () => {
  const [email, setEmail] = useState('')
  const [userMetadata, setUserMetadata] = useState<any>()
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  useMemo(() => {
    if (userMetadata) {
      console.log('Now lets auth ceramic')
      const ceramic = new Ceramic()
      console.log(ceramic)
      ceramic.setup()
      ceramic.authenticate(null)
    }
  }, [userMetadata])

  useEffect(() => {
    magic.user.isLoggedIn().then((magicIsLoggedIn) => {
      if (magicIsLoggedIn) {
        magic.user.getMetadata().then(setUserMetadata)
      }
    })
  }, [])

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
