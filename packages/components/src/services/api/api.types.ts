import { GeneralApiProblem } from './api-problem'
import { Character } from 'stores/_else/character/character'
import { AuthedPlayer } from 'stores/auth-store'
import {
  Address,
  ServiceRequestStatus,
  PaymentCard,
} from 'stores/service-store'
import { ApiGuild } from './types'

export interface User {
  id: number
  name: string
}

// Auth
export type AuthedPlayerResult =
  | {
      kind: 'ok'
      success: boolean
      user: AuthedPlayer
      chatrooms: any
      guild: ApiGuild
      service_requests: any
      token: string
    }
  | GeneralApiProblem

// Chat
export type FetchDirectChatroomResult =
  | { kind: 'ok'; success: boolean; chatroom: any }
  | GeneralApiProblem

export type SendMessageResult =
  | { kind: 'ok'; success: boolean; message: any }
  | GeneralApiProblem

// User
export type SavePushTokenResult =
  | { kind: 'ok'; success: boolean }
  | GeneralApiProblem

// Wallet
export type AttachSolWalletResult =
  | { kind: 'ok'; success: boolean }
  | GeneralApiProblem

// Demo
export type GetUsersResult = { kind: 'ok'; users: User[] } | GeneralApiProblem
export type GetUserResult = { kind: 'ok'; user: User } | GeneralApiProblem

export type GetCharactersResult =
  | { kind: 'ok'; characters: Character[] }
  | GeneralApiProblem
export type GetCharacterResult =
  | { kind: 'ok'; character: Character }
  | GeneralApiProblem

export interface ConfirmServiceRequestPayload {
  addresses: Address[]
  details: string | null
  payment_card: PaymentCard | null
  payment_method: string
  status: ServiceRequestStatus
  type: string
  when: Date
}
