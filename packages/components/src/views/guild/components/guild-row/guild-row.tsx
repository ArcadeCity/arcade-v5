import React from 'react'
import {
  Image,
  ImageStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useStores } from 'stores'
import { convertFromKM } from 'lib/util'
import { Guild } from 'stores/guild-store'
import { Avatar, Text } from 'views/shared'
import { images, spacing } from 'views/theme'

interface Props {
  guild: Guild
  measurementUnit: string
}

export const GuildRow = ({ guild, measurementUnit }: Props) => {
  const { navigate } = useNavigation()
  const { guildStore } = useStores()
  return (
    <TouchableOpacity
      key={guild.id}
      style={ROOT}
      onPress={() => {
        guildStore.setSelectedGuild(guild.id)
        navigate('guild', { screen: 'guildProfile' })
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <Avatar preset='s32x32' style={{ marginTop: 5 }} guild />
        <View style={{ paddingLeft: 20, flexDirection: 'column' }}>
          <Text preset='bold' text={guild.name} />
          <View style={{ width: 275 }}>
            <Text
              preset='description'
              text={guild.mission}
              style={{ marginBottom: 0 }}
              numberOfLines={1}
              ellipsizeMode='tail'
            />
            <Text
              preset='description'
              text={`${convertFromKM(
                guild.distance(),
                measurementUnit
              )} ${measurementUnit}`}
              style={{ marginBottom: 0 }}
              numberOfLines={1}
              ellipsizeMode='tail'
            />
          </View>
        </View>
        <Image source={images.next} style={NEXT} />
      </View>
    </TouchableOpacity>
  )
}

const ROOT: ViewStyle = {
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'center',
  maxHeight: 80,
  paddingVertical: spacing[6],
}

const NEXT: ImageStyle = {
  marginLeft: 'auto',
  marginTop: 12,
}
