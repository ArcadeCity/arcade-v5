import { ServiceRequestStatus } from 'stores/service-store'

export interface ApiAddress {
  id: string
  type: string
  coords: {
    latitude: number
    longitude: number
  }
  prettyName: string
}

export interface ApiChatroom {
  created_at: Date
  id: number
  messages?: ApiMessage[]
  name: string
  slug?: string
  pretty_name: string
  type: string
  user1_id: number | undefined
  user2_id: number | undefined
}

export interface ApiGeo {
  city: string
  region?: string
  isoCountryCode: string
}

export interface ApiGuild {
  id: number
  latitude: string
  longitude: string
  name: string
  mission: string
  created_at: Date
}

export interface ApiMessage {
  id: number
  user_id: number
  chatroom_id: number
  chatroom: ApiChatroom
  text: string
  created_at: Date
  user: ApiPlayer
}

export interface ApiPlayer {
  id: number
  bio?: string
  geo?: ApiGeo
  identity_verified: boolean
  profession: string
  profile_picture?: ApiProfilePicture
  username: string
}

export interface ApiProfilePicture {
  id?: number
  url?: string
}

export interface ApiServiceRequest {
  id: number
  addresses: any // This would be nice but its not what we have re json ApiAddress[]
  chatroom: ApiChatroom
  chatroom_id: number | null
  created_at: Date
  details: string | null
  driver_id: string | null
  payment_card_id: number | null
  payment_method: string
  requesting_user: ApiPlayer
  status: ServiceRequestStatus
  type: string
  user: ApiPlayer
  user_id: number
  when: Date
}

export interface ApiLoginResponse {
  firebaseToken: string
  token: string
  user: {
    acceptedTerms: Date
    bio: string
    chatrooms: ApiChatroom[]
    id: number
    identityVerified: boolean
    onboarded: number // bool but untyped and don't want to fuck up api
    paymentCards: any
    profession: string
    profilePicture: string
    serviceRequests: ApiServiceRequest[]
    username: string
  }
}
