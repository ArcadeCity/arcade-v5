import * as React from 'react'
import {
  Image,
  ImageStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { log } from 'lib'
import { Guild } from 'stores/guild-store'
import { Avatar, Text } from 'views/shared'
import { images, spacing } from 'views/theme'

interface Props {
  invitingPlayerId: number
  guild: Guild
  when: Date
  forOnPress: any
  deleteAllInvites: any
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

export const InviteDetail = ({
  forOnPress,
  guild,
  invitingPlayerId,
  deleteAllInvites,
  when,
}: Props) => {
  log('In InviteDetail with guild:', guild)

  try {
    return (
      <TouchableOpacity style={ROOT} onPress={forOnPress}>
        <View style={{ flexDirection: 'row' }}>
          <Avatar preset='s32x32' style={{ marginTop: 5 }} guild />
          <View style={{ paddingLeft: 20, flexDirection: 'column' }}>
            <Text preset='bold' text={guild.name} />
            <View style={{ width: 275 }}>
              <Text
                preset='description'
                tx='guild.guildInFormation'
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
  } catch (e) {
    log('hehehehehehe', e.message)
    // delete all invites for now hm? not ideal but hey
    // deleteAllInvites()
    return <View />
  }
}
