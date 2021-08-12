import { display } from 'lib'
import { Guild } from 'stores/guild-store'
import { Api } from './api'

export class GuildApi {
  private api: Api

  constructor(api: Api) {
    this.api = api
  }

  // Accept a guild invite. Join the guild chatroom. Hide further invites from this guild.(?)
  async acceptGuildInvite(inviteId: number) {
    const res = await this.api.callAuthedApi('/guild/acceptInvite', {
      inviteId,
    })
    return res
  }

  async fetchGlobalGuilds() {
    await this.api.apisauce.get('/')
  }

  async fetchGuildMembers(guildId: number) {
    await this.api.apisauce.get('/')
  }

  // Create a guild. Set current user as founder. Create guild chatroom.
  async guildCreate(guild: Guild) {
    const res = await this.api.callAuthedApi('/guild/create', {
      name: guild.name,
      mission: guild.mission,
      latitude: guild.centerCoords.latitude,
      longitude: guild.centerCoords.longitude,
    })
    display({
      name: 'guildCreate',
      value: { guild, res },
      important: true,
    })
    return {
      chatroom: res.chatroom,
      guild: res.guild,
    }
  }

  async guildInviteMember(guildId: number, playerId: number, uid: number) {
    await this.api.apisauce.get('/')
  }

  async guildSetMission(guildId: number, mission: string) {
    await this.api.apisauce.get('/')
  }

  // Ignore guild invite
  async ignoreInvite(inviteId: number) {
    const res = await this.api.callAuthedApi('/guild/ignoreInvite', {
      inviteId,
    })
    return res
  }

  // Leave guild
  async leaveGuild(guildId: number) {
    const res = await this.api.callAuthedApi('/guild/leaveGuild', {
      guildId,
    })
    return res
  }

  // Remove player from guild
  async removePlayerFromGuild(playerId: number, guildId: number) {
    const res = await this.api.callAuthedApi('/guild/removeMember', {
      playerId,
      guildId,
    })
    return res
  }

  async updateUserWithGuildId(uid: number, guildId: number) {
    await this.api.apisauce.get('/')
  }
}
