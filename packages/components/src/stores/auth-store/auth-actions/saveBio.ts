import { display } from 'lib'
import { AuthApi } from '@arcadecity/core/src/api'
import { AuthStore } from 'stores/auth-store'

export const saveBio = async (self: AuthStore, bio: string) => {
  const api = new AuthApi(self.env.api)
  const res = await api.saveBio(bio)
  const success = res && res.success
  display({
    name: 'saveBio',
    preview: `Received API response - ${success && 'success'}`,
    value: res,
  })
  if (success) {
    self.setBio(bio)
  }
  return true
}
