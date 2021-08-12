import * as React from 'react'
import { Alert, View } from 'react-native'
import { observer } from 'mobx-react-lite'
import { StaticMap } from 'views/map'
import { Button, Screen, Text, TextField } from 'views/shared'
import {
  BUTTON_SPACING,
  DESCRIP_SPACING,
  TEXTFIELD_SPACING,
} from '../../styles'
import { GuildModel } from 'stores/guild-store'
import { useStores } from 'stores'
import { Coordinate } from 'views/map/components/mapbox'
import { useNavigation } from '@react-navigation/native'
import { spacing } from 'views/theme'

export const GuildCreate = observer(() => {
  const [name, setName] = React.useState<string>()
  const [mission, setMission] = React.useState<string>()
  const { authStore, guildStore } = useStores()
  const { navigate, setOptions } = useNavigation()
  setOptions({ title: 'Create Guild' })
  const coords = authStore.coords
  const coordsArray: Coordinate = [coords.longitude, coords.latitude]

  const createGuildSubmit = () => {
    if (name.length < 4) {
      // Alert.alert(undefined, `errors.guildNameTooShort`)
      Alert.alert('Guild name too short')
      return
    } else if (mission.length < 20) {
      // Alert.alert(undefined, `errors.needStatmentNeedsWork`)
      Alert.alert('Your mission statement should be longer.')
      return
    } else
      guildStore.createGuild(
        GuildModel.create({
          name,
          mission,
          centerCoords: coords,
          establishedAt: Date.now(),
        })
      )

    navigate('guildHome')
    return
  }

  return (
    <Screen preset='scrollStack'>
      <Text
        preset='bold'
        tx='guild.guildName'
        style={DESCRIP_SPACING}
      />
      <TextField
        inputStyle={TEXTFIELD_SPACING}
        onChangeText={setName}
        value={name}
      />

      <Text
        preset='bold'
        tx='guild.missionStatement'
        style={DESCRIP_SPACING}
      />
      <TextField
        inputStyle={TEXTFIELD_SPACING}
        onChangeText={setMission}
        value={mission}
      />

      <Text
        preset='bold'
        tx='guild.guildBeacon'
        text='Guild Beacon'
        style={DESCRIP_SPACING}
      />
      <Text
        preset='description'
        tx='guild.guildBeaconExplainer'
        // style={DESCRIP_SPACING}
        style={{ marginTop: spacing[2] }}
      />
      <View style={{ width: '100%', height: 330, marginVertical: 10 }}>
        <StaticMap centerCoordinate={coordsArray} zoomLevel={9.8} />
      </View>

      <Button
        tx='guild.create'
        style={BUTTON_SPACING}
        onPress={createGuildSubmit}
      />
    </Screen>
  )
})
