import * as React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button, MenuButton, Screen, Text, TextField } from 'views/shared'
import { LONGDIVIDER } from '../../styles'

const dock = (
  <View style={{ marginBottom: 30, paddingHorizontal: 15 }}>
    <Button tx='guild.saveCharter' style={{ marginBottom: 20 }} />
    <Button preset='secondary' tx='guild.addLater' />
  </View>
)

export const CharterAdd = () => {
  const { navigate } = useNavigation()
  return (
    <Screen preset='scrollStack' dock={dock}>
      <Text preset='title' tx='guild.guildCharter' /> 
      <Text
        preset='description'
        tx='guild.charterAdd'
      />
      <View style={[LONGDIVIDER, { marginTop: 3, marginBottom: 3 }]} />
      <MenuButton
        titleTx='guild.viewExampleCharter'
        onPress={() => navigate('charterExample')}
        style={{ paddingVertical: 20 }}
        last
      />
      <View style={[LONGDIVIDER, { marginTop: 3, marginBottom: 3 }]} />
      <Text
        tx='guild.linkToGuildCharter'
        preset='bold'
        style={{ marginTop: 30 }}
      />
      <TextField placeholder='ex. arcade.city/yourguild' />
    </Screen>
  )
}
