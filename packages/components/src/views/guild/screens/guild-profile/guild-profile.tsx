import React from 'react'
import { Alert, View } from 'react-native'
import { observer } from 'mobx-react-lite'
import { useNavigation } from '@react-navigation/native'
import { useStores } from 'stores'
import { MenuButton, Screen } from 'views/shared'
import { images } from 'views/theme'
import { GuildRosterDetail, GuildSummary } from '../../components'
import { LONGDIVIDER } from '../../styles'
import { translate } from 'i18n'

export const GuildProfile: React.FC<{}> = observer(() => {
  const { authStore, chatStore, guildStore } = useStores()
  const { goBack, navigate } = useNavigation()

  const selectedGuild = guildStore.selectedGuild

  if (!selectedGuild) {
    goBack()
    return null
  }

  const id = selectedGuild.id
  const name = selectedGuild.name
  const mission = selectedGuild.mission
  const insertedAt = selectedGuild.establishedAt
  const members: any[] = []
  const guildRank = guildStore.guildRank
  const isMemberOfGuild = guildStore.isMemberOfGuild

  const clickLeaveGuild = () => {
    Alert.alert('guild.leave', 'common.areYouSure', [
      {
        text: 'common.yes',
        onPress: () => {
          guildStore.leaveGuild(selectedGuild.id)
        },
      },
      {
        text: 'common.no',
      },
    ])
  }

  return (
    <Screen preset='scrollStack' key={`${id}-${authStore?.locale}`}>
      <GuildSummary
        name={name}
        description={mission}
        cityName={translate(`guild.guildInFormation`)}
        members={members}
        insertedAt={insertedAt}
      />
      <View style={{ ...LONGDIVIDER, marginTop: 30, marginBottom: 25 }} />
      <GuildRosterDetail />
      <View style={{ ...LONGDIVIDER, marginTop: 0, marginBottom: 5 }} />
      {isMemberOfGuild(id) ? (
        <MenuButton
          titleTx='social.openChat'
          image={images.inboxActive}
          onPress={() => {
            chatStore.setActiveChatroom(id)
            navigate('chat')
          }}
          last
        />
      ) : (
        <View />
      )}

      <MenuButton
        titleTx='guild.viewMemberRoster'
        image={images.profileActive}
        onPress={
          () =>
            navigate('guildRoster', {
              title: name,
            })
          // navigate('guildRoster', {
          //   title: `${translateWithVars('guild.guildMembers', { name })}`,
          // })
        }
        last
      />

      {guildRank === 'founder' && isMemberOfGuild(id) ? (
        <MenuButton
          titleTx='guild.missionStatementEdit'
          image={images.charter}
          onPress={() => {
            navigate('guildProfileEdit')
          }}
          last
        />
      ) : (
        <View />
      )}

      {isMemberOfGuild(id) ? (
        <MenuButton
          titleTx='guild.leave'
          image={images.logout}
          onPress={clickLeaveGuild}
          last
        />
      ) : (
        <View />
      )}
    </Screen>
  )
})
