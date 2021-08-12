// @ts-nocheck
import * as React from 'react'
import { View } from 'react-native'
import { Button, Screen, Text } from '../../../shared'
import { GuildStore, NavigationStore, UserStore } from '../../../../stores'
import { inject, observer } from 'mobx-react-lite'
import { BUTTON_DOCK_SPACING, HEADER_SPACING } from '../../styles'
import { GuildInvites } from '../../components/guild-invites'
import { NearbyGuilds } from '../../components/nearby-guilds'
import { translateWithVars } from '../../../../i18n'

interface Props {
  guildStore?: GuildStore
  navigationStore?: NavigationStore
  userStore?: UserStore
}

@inject('guildStore', 'navigationStore', 'userStore')
@observer
export class GuildIntro extends React.Component<Props, {}> {
  static navigationOptions = () => ({
    header: null,
  })

  dock = () => {
    try {
      const {
        guildStore: { canCreateGuild, guild, setSelectedGuild },
        navigationStore: { navigateTo },
        userStore: {
          settings: { locale },
        },
      } = this.props

      return !guild && canCreateGuild ? (
        <Button
          tx='guild.create'
          style={BUTTON_DOCK_SPACING}
          onPress={() => navigateTo('guildCreate')}
        />
      ) : (
        //TODO: please stop concatenate strings, some language it change the order
        //example: open `guild_name` could !== `guild_name` open
        <Button
          text={`${translateWithVars('common.goto', { locale })} ${guild.name}`}
          style={BUTTON_DOCK_SPACING}
          onPress={() => {
            setSelectedGuild(guild.id)
            navigateTo('guildProfile')
          }}
        />
      )
    } catch (e) {
      console.tron.display({
        name: 'ERROR',
        preview: e.message,
        value: {
          message: e.message,
          ...e,
        },
        important: true,
      })
      return <View />
    }
  }

  render() {
    const {
      guildStore: { isInAGuild },
    } = this.props
    return (
      <Screen preset='scrollStack' dock={this.dock()}>
        <Text
          preset='title'
          tx='guild.guilds'
          style={HEADER_SPACING}
          capitalize
        />
        {!isInAGuild ? (
          <View>
            <Text preset='description' tx='guild.explainer1' />
            <Text preset='description' tx='guild.explainer2' />
          </View>
        ) : (
          <View />
        )}
        <GuildInvites />
        <NearbyGuilds />
      </Screen>
    )
  }
}
