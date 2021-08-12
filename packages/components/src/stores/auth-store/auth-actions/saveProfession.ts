import { display } from 'lib'
import { AuthApi } from 'services/api'
import { AuthStore } from 'stores/auth-store'

export const saveProfession = async (self: AuthStore, profession: string) => {
  const api = new AuthApi(self.env.api)
  const res = await api.saveProfession(profession)
  const success = res && res.success
  display({
    name: 'saveProfession',
    preview: `Received API response - ${success && 'success'}`,
    value: res,
  })
  if (success) {
    self.setProfession(profession)
  }
  return true
}
