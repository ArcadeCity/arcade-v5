import React from 'react'
import { View } from 'react-native'
import { observer } from 'mobx-react-lite'
import { useNavigation } from '@react-navigation/native'
import { useStores } from 'stores'
import { Text } from 'views/shared'
import { InviteDetail } from '../invite-detail'

export const GuildInvites = observer(() => {
  const { guildStore } = useStores()
  const { navigate } = useNavigation()
  const invitesFiltered = guildStore.invitesFiltered

  // TODO
  // let noInvites = false
  // If a guild no longer exists, 'Guild Invites - You have been invited to join :' is still displayed on the guild screen #41
  // invitesFiltered.map((invite: GuildInvite) => {
  //     noInvites = invite.guild ? true : false
  // })
  // if (!noInvites) {
  //     return <View />
  // }

  return (
    <View style={{ marginBottom: 30 }}>
      <Text
        preset='title2'
        tx='guild.guildInvites'
        style={{ marginBottom: 0 }}
      />
      <Text
        preset='description'
        tx='guild.invitedToJoin'
        style={{ marginBottom: 0 }}
      />
      {invitesFiltered.map((invite: any) => (
        <InviteDetail
          key={invite.id}
          forOnPress={() => {
            guildStore.setSelectedGuild(invite.guild)
            guildStore.setSelectedInvite(invite.id)
            navigate('guildInvited')
          }}
          invitingPlayerId={invite.invitingPlayer}
          guild={invite.guild}
          when={invite.when}
          deleteAllInvites={guildStore.deleteAllInvites}
        />
      ))}
    </View>
  )
})
