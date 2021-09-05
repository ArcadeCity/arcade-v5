import moment from 'moment'
import { uuid } from 'lib/uuid'
import { getRoot } from 'mobx-state-tree'
import {
  Chatroom,
  ChatroomModel,
  Message,
  MessageModel,
} from 'stores/chat-store/chat-models'
import { ChatStore } from 'stores/chat-store'
import { Player, PlayerModel } from 'stores/player-store'
import { RootStore } from 'stores/root-store'
import {
  Address,
  AddressModel,
  CoordsModel,
  ServiceRequest,
  ServiceRequestModel,
  ServiceRequestStatus,
} from 'stores/service-store/service-models'
import {
  ApiAddress,
  ApiChatroom,
  ApiGuild,
  ApiMessage,
  ApiPlayer,
  ApiServiceRequest,
} from './types'
import { Guild, GuildModel } from 'stores/guild-store'
import { Event, EventModel } from 'stores/relay-store'

export const saveServiceRequest = (self: any, apiSR: ApiServiceRequest) => {
  // display({
  //     name: 'normalizing',
  //     preview: 'saveServiceRequest',
  //     value: apiSR,
  // })

  // self can be any sub store
  const root = getRoot(self) as RootStore

  // Ensure players exist.
  const apiPlayer: ApiPlayer = apiSR.requesting_user ?? apiSR.user // TODO: duplicative with new 'with' user?
  const player: Player = normalizeApiPlayer(apiPlayer)
  root.playerStore.setPlayer(player)

  // Create the chatroom
  const apiChatroom: ApiChatroom = apiSR.chatroom
  const chatroom: Chatroom = normalizeApiChatroom(apiChatroom)
  root.chatStore.setChatroom(chatroom)

  // Save the chatroom
  const serviceRequest: ServiceRequest = normalizeApiServiceRequest(apiSR)
  root.serviceStore.setRequest(serviceRequest)
}

export const getOrCreateChatroom = (
  self: ChatStore,
  apiChatroom: ApiChatroom
) => {
  const chatroomId = apiChatroom.id.toString()
  if (!self.chatrooms.has(chatroomId)) {
    const chatroom: Chatroom = normalizeApiChatroom(apiChatroom)
    self.setChatroom(chatroom)
    return chatroom
  } else {
    return self.chatrooms.get(chatroomId) ?? normalizeApiChatroom(apiChatroom) // Shouldn't reach latter
  }
}

export const normalizeApiAddresses = (apiAddresses: ApiAddress[]) => {
  const addresses: Address[] = []
  apiAddresses.forEach((apiAddress: ApiAddress) => {
    const normalized = AddressModel.create({
      id: uuid(),
      prettyName: apiAddress.prettyName,
      type: apiAddress.type,
      coords: CoordsModel.create({
        latitude: apiAddress.coords.latitude,
        longitude: apiAddress.coords.longitude,
      }),
    })
    addresses.push(normalized)
  })
  return addresses
}

export const normalizeApiChatroom = (chatroom: ApiChatroom) => {
  const normalizedChatroom: Chatroom = ChatroomModel.create({
    id: chatroom.id,
    createdAt: new Date(chatroom.created_at),
    name: chatroom.name,
    type: chatroom.type,
    prettyName: chatroom.pretty_name,
    user1id: chatroom.user1_id,
    user2id: chatroom.user2_id,
    messages: chatroom.messages ? normalizeApiMessages(chatroom.messages) : [],
  })
  return normalizedChatroom
}

export const normalizeApiGuild = (guild: ApiGuild) => {
  const normalizedGuild: Guild = GuildModel.create({
    id: guild.id,
    name: guild.name,
    mission: guild.mission,
    establishedAt: new Date(guild.created_at),
    centerCoords: {
      latitude: parseFloat(guild.latitude),
      longitude: parseFloat(guild.longitude),
    },
  })
  return normalizedGuild
}

export const normalizeApiMessage = (message: ApiMessage) => {
  const normalizedMessage: Message = MessageModel.create({
    id: message.id,
    text: message.text,
    createdAt: new Date(message.created_at),
    userId: message.user_id,
    chatroomId: message.chatroom_id,
  })
  return normalizedMessage
}

const normalizeApiMessages = (apiMessages: ApiMessage[]) => {
  const normalizedMessages: Message[] = []
  apiMessages.forEach((apiMessage: ApiMessage) => {
    normalizedMessages.push(normalizeApiMessage(apiMessage))
  })
  return normalizedMessages
}

export const normalizeApiPlayer = (player: ApiPlayer) => {
  const geo = player.geo
    ? `${player.geo.city}, ${player.geo.region}, ${player.geo.isoCountryCode}`
    : ''
  const normalizedPlayer: Player = PlayerModel.create({
    id: player.id,
    bio: player.bio,
    city: geo,
    // identityVerified: player.identity_verified,
    level: 1, // TODO
    profession: player.profession,
    profilePicture: player.profile_picture?.url ?? undefined,
    username: player.username,
  })
  return normalizedPlayer
}

export const normalizeApiServiceRequest = (
  serviceRequest: ApiServiceRequest
) => {
  // display({
  //     name: 'normalizeApiServiceRequest',
  //     value: serviceRequest,
  //     important: true,
  // })

  const normalized: ServiceRequest = ServiceRequestModel.create({
    id: serviceRequest.id,
    addresses: normalizeApiAddresses(JSON.parse(serviceRequest.addresses)),
    chatroom: serviceRequest.chatroom_id || undefined,
    createdAt: moment(serviceRequest.created_at).utc(true).toDate(),
    details: serviceRequest.details,
    // paymentCard: serviceRequest.payment_card_id ?? undefined,
    paymentMethod: serviceRequest.payment_method,
    playerClaiming: serviceRequest.driver_id ?? undefined,
    playerRequesting: serviceRequest.user_id,
    requestId: serviceRequest.id,
    status:
      serviceRequest.status === ServiceRequestStatus.CANCELLED
        ? ServiceRequestStatus.CANCELLED_BY_RIDER
        : serviceRequest.status,
    type: serviceRequest.type,
    when: moment(serviceRequest.when).utc(true).toDate(),
  })
  return normalized
}

export const normalizeEvent = (event: any) => {
  const normalized: Event = EventModel.create({
    id: event.id,
    createdAt: event.created_at,
    content: event.content,
    sig: event.sig,
    kind: event.kind,
    pubkey: event.pubkey,
  })
  return normalized
}
