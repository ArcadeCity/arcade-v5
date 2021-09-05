import React from 'react'
import { Image, ImageStyle, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button, Screen, Text } from 'views/shared'
import { images } from 'views/theme'
import { useStores } from 'stores'
import { GuildDetail } from 'views/guild/components/guild-detail'
import { observer } from 'mobx-react-lite'
import { translate } from 'i18n'
import { capitalize } from 'lodash'

export const GuildHome: React.FC<{}> = observer(() => {
  const { navigate, setOptions } = useNavigation()
  const { authStore, guildStore } = useStores()
  const guild = guildStore.guild
  setOptions({ title: capitalize(translate('guild.guilds')) })
  return (
    <Screen preset='scrollStack'>
      <View style={styles.container} key={authStore?.locale}>
        <Image source={images.guild} style={GUILDIMG} />
        <View style={{ marginTop: -35 }}>
          <Text preset='title3' text={capitalize(translate('guild.guilds'))} />
          <Text preset='description' tx='guild.explainer1' />

          <Text preset='description' tx='guild.explainer2' />

          <Text preset='description' tx='guild.charterExplainer4' />
        </View>

        <Button
          tx='guild.viewExampleCharter'
          onPress={() => navigate('charterExample')}
        />

        {!guild && (
          <Button
            tx='guild.create'
            preset='purpleglow'
            onPress={() => navigate('guildCreate')}
            style={{ marginTop: 15 }}
          />
        )}

        {guild && (
          <View style={{ width: '100%' }}>
            <Text
              preset='title2'
              tx='guild.yourGuild'
              style={{ textAlign: 'left', marginTop: 35 }}
            />
            <GuildDetail
              button={false}
              navigateTo={() => {}}
              selectedGuild={guild}
            />

            <Text
              preset='description'
              style={{ marginTop: 15 }}
              tx='guild.toInviteMembers'
            />
          </View>
        )}
      </View>
    </Screen>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})

const GUILDIMG: ImageStyle = {
  height: 280,
  width: 280,
  resizeMode: 'contain',
  alignSelf: 'center',
}
