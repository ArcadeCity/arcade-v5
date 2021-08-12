import React from 'react'
import { View } from 'react-native'
import { Text } from 'views/shared'
import { GuildRow } from '../guild-row'

interface Props {
  guilds: readonly any[] // Guild[]
}

export const NearbyGuilds: React.FC<Props> = ({ guilds }) => {
  const noGuilds: boolean = guilds.length === 0
  if (noGuilds) {
    return <Text preset='description' tx='guild.noNearbyGuilds' />
  }
  return (
    <View style={{ marginTop: 20, marginBottom: 35 }}>
      <Text
        preset='title2'
        tx='guild.nearbyGuilds'
        style={{ marginBottom: 0 }}
      />
      <Text
        preset='description'
        tx='guild.guildClosestYou'
        style={{ marginBottom: 0 }}
      />
      {guilds.map((guild) => (
        <GuildRow
          key={guild.id}
          guild={guild}
          measurementUnit='km' //{measurementUnit}
        />
      ))}
    </View>
  )
}
