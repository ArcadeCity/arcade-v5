import * as React from 'react'
import { TextStyle, View, ViewStyle } from 'react-native'
import { Avatar, Text } from '../../../shared'
// import { Location as LocationType } from '../../../../stores'
import { spacing } from 'views/theme'
import { DETAILS, DIVIDER, USERNAME } from '../../styles'
import { format } from '../../../../lib/locale-date-fns'

const ROOT: ViewStyle = {
  flex: 1,
  flexDirection: 'row',
  paddingHorizontal: spacing[3],
  paddingBottom: 30,
  marginTop: 0,
}

const NAME: TextStyle = {
  marginVertical: 0,
  fontSize: 20,
  paddingTop: 0,
  marginTop: -20,
}

export interface GuildSummaryProps {
  name: string
  description: string
  cityName: string
  // location: LocationType
  members: any
  insertedAt: Date
  uri?: string
}

/**
 * A brief overview of a user's profile with avatar, name, username, and member since.
 */
export function GuildSummary(props: GuildSummaryProps) {
  // console.tron.display({
  //   name: 'GuildCard props',
  //   value: props,
  //   preview: 'here they are'
  // })
  const { name, description, cityName, insertedAt, uri } = props // location
  // console.tron.display({
  //   name: 'insertedAt',
  //   value: insertedAt
  // })

  if (!name) return <View />
  return (
    <View>
      <View style={ROOT}>
        <Avatar guild={true} preset='s104x128' uri={uri} />
        <View style={DETAILS}>
          <Text preset='title' text={name} style={NAME} />
          <Text preset='description' text={cityName} style={USERNAME} />
          <View style={DIVIDER} />
          <Text preset='small'>
            <Text preset='small' tx='guild.created' capitalize />
            <Text preset='small' text={' ' + format(insertedAt, 'MMM YYYY')} />
            <Text preset='small' text='date util placeholder' />
          </Text>
        </View>
      </View>
      <Text preset='bold' tx='guild.missionStatement' style={USERNAME} />
      <Text preset='description' text={description} style={USERNAME} />
    </View>
  )
}
