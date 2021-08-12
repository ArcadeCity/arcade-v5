import React from 'react'
import {
  Image,
  ImageStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { Avatar, Text } from 'views/shared'
import { images, spacing } from 'views/theme'
import { Player } from 'stores/player-store'

interface Props {
  forOnPress: any
  player: Player // Sure but must expand to include role in guild...?
}

export const GuildMemberDetail = ({ forOnPress, player }: Props) => {
  if (!player) return null
  return (
    <TouchableOpacity key={player.id} style={ROOT} onPress={forOnPress}>
      <View style={{ flexDirection: 'row' }}>
        <Avatar
          preset='s32x32'
          uri={player.profilePicture}
          style={{ marginTop: 5 }}
        />
        <View style={{ paddingLeft: 20, flexDirection: 'column' }}>
          <Text preset='bold' text={player.username} />
          <View style={{ width: 275 }}>
            <Text
              preset='description'
              text={player.guildRole}
              // text={translate(
              //   `guild.guildRanks.${player.guildRole.toLocaleLowerCase()}`
              // )}
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
