import { display } from 'lib'
import { AuthStore } from '../auth-store'

export const logout = async (self: AuthStore) => {
  const id = self.player.id
  try {
    self.env.broadcasting.echo.leave(`user.${id}`)
  } catch (e) {
    console.log("Couldn't end broadcasting something")
  }
  self.rootStore.reset()
  self.env.api.apisauce.setHeaders({})
  display({
    name: 'logout',
    preview: `State reset`,
  })
  const magic = self.env.magic.sdk
  magic.user.logout().then((res) => {
    display({
      name: 'logout',
      preview: `Logged out of Magic`,
      value: res,
    })
  })
  return true
}
