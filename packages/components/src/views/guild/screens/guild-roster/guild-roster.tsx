import React, { useEffect } from 'react'
import { values } from 'mobx' // until we return a sorted array
import { observer } from 'mobx-react-lite'
import { useNavigation } from '@react-navigation/native'
import { useStores } from 'stores'
import { Screen } from 'views/shared'
import { GuildMemberDetail } from '../../components'
import { Player } from 'stores/player-store'

export const GuildRoster: React.FC<{}> = observer(() => {
  const { guildStore, playerStore } = useStores()
  const { navigate } = useNavigation()

  const selectedGuild = guildStore.selectedGuild
  if (!selectedGuild) return null

  const members: any = selectedGuild.members

  useEffect(() => {
    guildStore.fetchGuildMembers(selectedGuild.id)
  }, [])

  // TODO: Need to handle no members?

  return (
    <Screen preset='scrollStack'>
      {values(members).map((member: Player) => {
        return (
          <GuildMemberDetail
            player={member}
            // key={id}
            // name={name}
            // guildRole={rank}
            // playerId={id}
            // avatar={photo}
            forOnPress={() => {
              playerStore.setSelectedPlayer(member.id)
              navigate('profile')
            }}
          />
        )
      })}
    </Screen>
  )
})
