import { ApiResponse } from 'apisauce'
import { Api } from './api'
import { AttachSolWalletResult } from './api.types'
import { getGeneralApiProblem } from './api-problem'
import { log } from 'lib'

export class WalletApi {
  private api: Api

  constructor(api: Api) {
    this.api = api
  }

  async attachSolWallet(payload: any): Promise<AttachSolWalletResult> {
    try {
      // make the api call
      const response: ApiResponse<any> = await this.api.apisauce.post(
        `${this.api.config.url}/attachSolWallet`,
        payload
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
}
