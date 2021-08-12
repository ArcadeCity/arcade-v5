import { Player } from '../player-models'
import { display } from 'lib'

export const fetchNearbyPlayers = async (self: any) => {
  try {
    const res = await self.env.api.fetchNearbyPlayers()
    const success = res && res.success
    display({
      name: 'fetchNearbyPlayers',
      preview: `Received API response - ${success && 'success'}`,
      value: res,
    })
    if (success) {
      res.players.forEach((player: any) => {
        const playerObj: Player = {
          id: player.id,
          bio: player.bio ?? undefined,
          city: player.geo
            ? `${player.geo.city}, ${player.geo.region}, ${player.geo.isoCountryCode}`
            : undefined,
          guildRole: '',
          level: 1,
          nearby: true,
          profession: player.profession ?? undefined,
          profilePicture: player?.profile_picture?.url ?? undefined,
          username: player?.username ?? undefined,
        }

        self.setPlayer(playerObj)
        // log(`Set player: ${playerObj.username}`)
      })
    }
  } catch (e) {
    display({
      name: 'nice error idiot',
      preview: 'dumb',
      value: e.message,
    })
  }
  return true
}
