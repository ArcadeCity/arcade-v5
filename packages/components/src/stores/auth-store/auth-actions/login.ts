import { Alert, Keyboard } from 'react-native'
import { AuthStore } from '../auth-store'

export const login = async (self: AuthStore) => {
  try {
    self.setLoggingIn(true)
    Keyboard.dismiss()
    const magic = self.env.magic.sdk
    await magic.auth.loginWithMagicLink({ email: self.emailInput })
    const token = await magic.user.getIdToken()
    self.setMagicToken(token)
    await self.loginServer(token)
    self.setLoggingIn(false)
  } catch (e) {
    self.setLoggingIn(false)
    Alert.alert('Login error', e.message)
  }
  return true
}
