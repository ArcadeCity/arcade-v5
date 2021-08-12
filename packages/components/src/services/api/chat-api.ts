import { ApiResponse } from 'apisauce'
import { Api } from './api'
import { FetchDirectChatroomResult, SendMessageResult } from './api.types'
import { getGeneralApiProblem } from './api-problem'
import { log } from 'lib'

export class ChatApi {
  private api: Api

  constructor(api: Api) {
    this.api = api
  }

  async fetchDirectChatroomWithPlayer(
    playerId: number
  ): Promise<FetchDirectChatroomResult> {
    try {
      // make the api call
      const response: ApiResponse<any> = await this.api.apisauce.post(
        `${this.api.config.url}/chat/fetchTwoPlayerChatroom`,
        { playerId }
      )

      // the typical ways to die when calling an api
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }

      return {
        kind: 'ok',
        success: response.data.success,
        chatroom: response.data.chatroom,
      }
    } catch (e) {
      log(e.message)
      return { kind: 'bad-data' }
    }
  }

  async sendMessage(
    text: string,
    chatroom_id: number,
    user_id: number
  ): Promise<SendMessageResult> {
    try {
      // make the api call
      const response: ApiResponse<any> = await this.api.apisauce.post(
        `${this.api.config.url}/chat/sendMessage`,
        { text, chatroom_id, user_id }
      )

      // the typical ways to die when calling an api
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }

      return {
        kind: 'ok',
        success: response.data.success,
        message: response.data.message,
      }
    } catch (e) {
      __DEV__ && log(e.message)
      return { kind: 'bad-data' }
    }
  }
}
