import * as React from 'react'
import { View } from 'react-native'
import { Guild } from 'stores/guild-store'
import { Avatar, Button, Text } from 'views/shared'

interface Props {
  button?: boolean
  navigateTo: any
  selectedGuild: Guild
}

const BUTTONS = {
  width: '92%',
  marginHorizontal: 10,
}

export const GuildDetail = ({
  button = true,
  navigateTo,
  selectedGuild,
}: Props) => {
  if (!selectedGuild) {
    return <View />
  }
  return (
    <View style={{ paddingHorizontal: 15, paddingVertical: 20, width: '100%' }}>
      <View style={{ flexDirection: 'row', paddingHorizontal: '5%' }}>
        <Avatar preset='s32x32' style={{ marginTop: 5 }} guild />
        <View style={{ paddingLeft: 20, flexDirection: 'column' }}>
          <Text preset='bold' text={selectedGuild.name} />
          <View style={{ width: 215 }}>
            <Text
              preset='description'
              text={selectedGuild.mission}
              style={{ marginBottom: 0 }}
              numberOfLines={1}
              ellipsizeMode='tail'
            />
          </View>
        </View>
      </View>
      {button && (
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            tx='guild.viewGuildProfile'
            style={BUTTONS}
            onPress={() => navigateTo('guildProfile')}
          />
        </View>
      )}
    </View>
  )
}
