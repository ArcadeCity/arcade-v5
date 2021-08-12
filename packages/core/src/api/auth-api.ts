import { ApiResponse } from 'apisauce'
import { getConstants, log } from 'lib'
import { Api } from './api'
import { AuthedPlayerResult, SavePushTokenResult } from './api.types'
import { getGeneralApiProblem } from './api-problem'
import { ExpoPushToken } from 'expo-notifications'
import { Coords } from 'stores/service-store'

/**
 * authWithServer
 * saveBio
 * saveGeo
 * saveOnboarded
 * saveProfession
 * savePushToken
 * saveTermsAgree
 * saveUsername
 * submitFeedback
 */

export class AuthApi {
  private api: Api
  private constants

  constructor(api: Api) {
    this.api = api
    this.constants = getConstants()
  }

  async authWithServer(token: string): Promise<AuthedPlayerResult> {
    const constants = getConstants()
    const device_name = constants.deviceName
    const version_number = constants.ourVersionNumber
    try {
      // make the api call
      const response: ApiResponse<any> = await this.api.apisauce.post(
        `${this.api.config.url}/auth`,
        {
          did_token: token,
          device_name,
          version_number,
        }
      )

      // the typical ways to die when calling an api
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }

      return {
        kind: 'ok',
        user: response.data.user,
        success: response.data.success,
        chatrooms: response.data.chatrooms,
        guild: response.data.guild,
        service_requests: response.data.service_requests,
        token: response.data.token,
      }
    } catch (e) {
      log(e.message)
      return { kind: 'bad-data' }
    }
  }

  async saveBio(bio: string) {
    const res = await this.api.callAuthedApi('/user/updateBio', { bio })
    return res
  }

  async saveGeo(geo: any, coords: Coords) {
    const res = await this.api.callAuthedApi('/user/updateGeo', {
      ...geo,
      ...coords,
    })
    return res
  }

  async saveInvite(email: string, message: string) {
    const res = await this.api.callAuthedApi('/invite', {
      email,
      message,
    })
    return res
  }

  async saveOnboarded(onboarded: boolean) {
    const res = await this.api.callAuthedApi('/user/updateOnboarded', {
      onboarded,
    })
    return res
  }

  async saveProfession(profession: string) {
    const res = await this.api.callAuthedApi('/user/updateProfession', {
      profession,
    })
    return res
  }

  async savePushToken(token: ExpoPushToken): Promise<SavePushTokenResult> {
    try {
      // make the api call
      const response: ApiResponse<any> = await this.api.apisauce.post(
        `${this.api.config.url}/user/savePushToken`,
        {
          token: token.data,
          type: token.type,
          device_name: getConstants().deviceName,
        }
      )

      // the typical ways to die when calling an api
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }

      return { kind: 'ok', success: response.data.success }
    } catch (e) {
      log(e.message)
      return { kind: 'bad-data' }
    }
  }

  async saveTermsAgree(whenAgree: Date) {
    const res = await this.api.callAuthedApi('/user/updateTermsAgree', {
      whenAgree,
    })
    return res
  }

  async saveUsername(username: string) {
    const res = await this.api.callAuthedApi('/user/updateUsername', {
      username,
    })
    return res
  }

  async submitFeedback(feedback: string) {
    const res = await this.api.callAuthedApi('/user/submitFeedback', {
      feedback,
    })
    return res
  }
}
