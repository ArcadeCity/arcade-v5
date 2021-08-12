/**
 * GuildRosterDetail
 * The widget on guild profiles showing the member count and some avatars
 * Whole thing is clickable and goes to the roster(?)
 * Fetches its own data-- needs to be in sync with the full GuildRoster screen
 *    in case someone clicks quickly on the GuildRoster before loading is done
 */

import React, { useEffect } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { values } from 'mobx' // until we return a sorted array
import { observer } from 'mobx-react-lite'
import { useNavigation } from '@react-navigation/native'
import { useStores } from 'stores'
// import { translateWithVars } from '../../../../i18n'
import { MEMBERAVATAR, MEMBERLIST } from '../../styles'
import { Avatar, Text } from 'views/shared'
import { spacing } from 'views/theme'
import { translate } from 'i18n'

export const GuildRosterDetail = observer(() => {
  const { authStore, guildStore, playerStore } = useStores()
  const { navigate } = useNavigation()

  const selectedGuild = guildStore.selectedGuild

  useEffect(() => {
    if (!selectedGuild) return
    // guildStore.fetchGuildMembers(selectedGuild.id)
  }, [])

  if (!selectedGuild) return null
  const members: any = selectedGuild.members
  const name = selectedGuild.name

  const memberCount = values(members).length
  const memberText = `${memberCount} ${translate('guild.members')}`
  // const memberText = memb
  // const memberText = translateWithVars('guild.countMembers', {
  //   count: memberCount,
  // })
  const guildRosterTitle = name
  // const guildRosterTitle = `${translateWithVars('guild.guildMembers', {
  //   name,
  // })}`

  return (
    <TouchableOpacity
      onPress={() => navigate('guildRoster', { title: guildRosterTitle })}
      key={authStore?.locale}
    >
      <Text
        preset='sectionHeader'
        text={memberText}
        style={{
          letterSpacing: 2,
          paddingBottom: 3,
          marginBottom: 3,
          paddingHorizontal: spacing[3],
        }}
      />
      <View style={MEMBERLIST}>
        {values(members).map((member) => {
          const { id, photo } = member
          return (
            <Avatar
              key={id}
              preset='s48x48'
              style={MEMBERAVATAR}
              uri={photo}
              forOnPress={() => {
                playerStore.setSelectedPlayer(id)
                navigate('profile')
              }}
              guild
            />
          )
        })}
      </View>
    </TouchableOpacity>
  )
})
