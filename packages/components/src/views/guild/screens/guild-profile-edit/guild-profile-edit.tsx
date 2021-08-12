import * as React from 'react'
import { Alert } from 'react-native'
import { useStores } from 'stores'
import { Button, Screen, Text, TextField } from 'views/shared'

export const GuildProfileEdit = () => {
  const { guildStore } = useStores()
  const [mission, setMission] = React.useState<string>()
  const saveMission = () => {
    const missionStatement = mission.trim()
    if (missionStatement && missionStatement.length > 0) {
      guildStore.saveMission(missionStatement)
    } else {
      Alert.alert('guild.guild', 'guild.plzEnterMission')
    }
  }
  return (
    <Screen preset='scrollStack'>
      <Text
        preset='title'
        tx='guild.missionStatementEdit'
        style={{ marginTop: 30 }}
      />

      <Text
        preset='description'
        tx='guild.missionStatement'
        style={{ marginTop: 25, marginBottom: 0 }}
      />
      <TextField
        style={{
          marginVertical: 0,
          paddingVertical: 0,
          paddingTop: 10,
          marginBottom: 30,
        }}
        value={mission}
        onChangeText={(text) => setMission(text)}
      />

      <Button tx='guild.missionStatementSave' onPress={saveMission} />
    </Screen>
  )
}
