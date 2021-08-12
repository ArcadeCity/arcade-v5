import { display } from 'lib'
import { AuthApi } from '@arcadecity/core/src/api'
import { afterLogin, AuthStore } from 'stores/auth-store'

export const loginServer = async (self: AuthStore, token: string) => {
  const authApi = new AuthApi(self.env.api)
  const result = await authApi.authWithServer(token)
  display({
    name: 'loginServer',
    preview: `Server response: ${result.kind}`,
    value: result,
  })
  if (result.kind === 'ok' && result.success) {
    afterLogin(self, result)
  } else {
    display({
      name: 'loginServer',
      preview: `Error`,
      value: result,
      important: true,
    })
  }
  return true
}
