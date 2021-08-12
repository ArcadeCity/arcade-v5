import { display } from 'lib'
import {
  ApiChatroom,
  ApiServiceRequest,
  AuthedPlayerResult,
  normalizeApiChatroom,
  normalizeApiGuild,
  saveServiceRequest,
} from 'services/api'
import { AuthStore } from 'stores/auth-store'
import { Chatroom } from 'stores/chat-store'
import { Guild } from 'stores/guild-store'

export const afterLogin = async (
  self: AuthStore,
  result: AuthedPlayerResult
) => {
  if (result.kind !== 'ok') return false

  // POPULATE STORE
  self.setApiToken(result.token)
  self.setAuthedPlayer(result.user)
  self.getLocation()

  // TODO: Need to undo this at logout?
  self.env.api.apisauce.setHeaders({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${result.token}`,
  })

  const chatrooms = result.chatrooms
  if (chatrooms) {
    chatrooms.forEach((apiChatroom: ApiChatroom) => {
      const chatroom: Chatroom = normalizeApiChatroom(apiChatroom)
      self.rootStore.chatStore.setChatroom(chatroom)
    })
  }

  const apiGuild = result.guild
  if (apiGuild) {
    const guild: Guild = normalizeApiGuild(apiGuild)
    display({
      name: 'normalize',
      value: { guild, apiGuild },
      important: true,
    })
    self.rootStore.guildStore.setGuild(guild)
    self.rootStore.guildStore.setGuildId(guild.id)
  }

  const serviceRequests = result.service_requests
  if (serviceRequests) {
    serviceRequests.forEach((apiSR: ApiServiceRequest) => {
      saveServiceRequest(self, apiSR)
    })
    self.rootStore.serviceStore.decideActiveRequest()
  }

  return true
}
