import { Api } from './api'

/**
 * fetchNearbyPlayers
 * fetchNearbyReport
 */

export class PlayerApi {
  private api: Api

  constructor(api: Api) {
    this.api = api
  }

  async fetchNearbyPlayers() {
    const res = await this.api.callAuthedApi('/players/nearby')
    return res
  }

  async fetchNearbyReport() {
    const res = await this.api.callAuthedApi('/report/nearby')
    return res
  }

  async fetchPlayerByUsername(username: string) {
    const res = await this.api.callAuthedApi('/player/fetchByUsername', {
      username,
    })
    return res
  }
}
