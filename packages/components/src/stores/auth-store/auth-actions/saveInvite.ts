import { display } from 'lib'
import { Alert } from 'react-native'
import { AuthApi } from 'services/api'
import { AuthStore } from 'stores/auth-store'

export const saveInvite = async (
  self: AuthStore,
  email: string,
  message: string
) => {
  const api = new AuthApi(self.env.api)
  try {
    const res = await api.saveInvite(email, message)
    display({
      name: 'saveInvite',
      preview: `Received API response`,
      value: res,
    })
    self.setInvites(self.invites - 1)
    Alert.alert('Invite sent')
    return true
  } catch (e) {
    Alert.alert('Error sending invite')
    return false
  }
}
