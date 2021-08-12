import { useState } from 'react'
import { useQuery } from 'react-query'
import { getSnapshot, IMSTMap } from 'mobx-state-tree'
import { normalizeApiPlayer } from 'services/api'
import { Message, Chatroom, ChatroomModel } from 'stores/chat-store'
import { Player } from 'stores/player-store'
import { ServiceRequest } from 'stores/service-store'
import { useStores } from 'stores'

interface Props {
  chatrooms?: IMSTMap<typeof ChatroomModel>
  requests?: readonly ServiceRequest[]
}

export const usePlayerResolver = ({ chatrooms, requests }: Props) => {
  const { authStore, playerStore } = useStores()
  const playerIds: number[] = []

  // display({
  //   name: 'usePlayerResolver',
  //   preview: { chatrooms, requests },
  //   important: true,
  // })

  chatrooms &&
    chatrooms.forEach((chatroom: Chatroom) => {
      if (chatroom.user1id && !playerIds.includes(chatroom.user1id)) {
        playerIds.push(chatroom.user1id)
      }

      if (chatroom.user2id && !playerIds.includes(chatroom.user2id)) {
        playerIds.push(chatroom.user2id)
      }

      chatroom.messages.forEach((message: Message) => {
        const id = message.userId
        if (!playerIds.includes(id)) {
          playerIds.push(id)
        }
      })
    })

  requests &&
    requests.length > 0 &&
    requests.forEach((request: ServiceRequest) => {
      const snap = getSnapshot(request)
      const reqPlayerId = snap.playerRequesting?.toString()
      const claimPlayerId = snap.playerClaiming?.toString()

      if (reqPlayerId && !playerIds.includes(parseInt(reqPlayerId))) {
        playerIds.push(parseInt(reqPlayerId))
        // console.log('PUSHED', reqPlayerId)
      }

      if (claimPlayerId && !playerIds.includes(parseInt(claimPlayerId))) {
        playerIds.push(parseInt(claimPlayerId))
        // console.log('PUSHED', claimPlayerId)
      }
    })

  const [data, setData]: any = useState(null)
  useQuery('playerData', async () => {
    if (playerIds.length === 0) {
      setData('nothing')
      return
    }
    const res = await fetch('https://arcade.city/api/player-data', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authStore.tokens.api}`,
      },
      body: JSON.stringify({
        playerIds,
      }),
    })
    const { success, players } = await res.json()
    if (success) {
      players.forEach((apiPlayer: ApiPlayer) => {
        const player: Player = normalizeApiPlayer(apiPlayer)
        playerStore.setPlayer(player)
      })
      setData(players)
    }
  })

  // TODO: Needed for storybook - is there a way to show this only in Storybook mode?
  // if (__DEV__) {
  //   return {
  //     loadedAllPlayers: true,
  //   }
  // }

  return {
    loadedAllPlayers: !!data,
  }
}

interface ApiPlayer {
  agreed_to_terms: Date
  bio: string
  created_at: Date
  geo: any
  id: number
  identity_verified: boolean
  onboarded: number
  profession: string
  profile_picture: {
    url: string
  }
  username: string
}
