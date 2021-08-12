import { GuildApi } from 'services/api'
import { GuildInvite } from '../guild-models'
import { GuildStore } from '../guild-store'

export const inviteIgnore = async (self: GuildStore, invite: GuildInvite) => {
  const api = new GuildApi(self.env.api)
  await api.ignoreInvite(invite.id)
  return true
}
