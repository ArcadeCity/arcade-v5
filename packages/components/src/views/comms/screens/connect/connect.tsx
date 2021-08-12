import React from 'react'
import { Linking, View, ViewStyle } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button, Screen, Text } from 'views/shared'
import { color, spacing } from 'views/theme'

export const Connect: React.FC<{}> = () => {
  const { goBack, setOptions } = useNavigation()
  setOptions({ title: 'Connect' })
  return (
    <Screen preset='scrollStack'>
      <View style={CONTAINER}>
        <Text
          preset='title'
          tx='comms.connectWithArcadeCity'
          style={{ marginTop: 30 }}
        />
        <Text
          preset='description'
          tx='comms.joinUsOnSocials'
          style={{ marginBottom: 30 }}
        />
        <Button
          style={TWITTER_BUTTON}
          preset='primary'
          tx='comms.followUsOnTwitter'
          onPress={() => {
            Linking.openURL('https://www.twitter.com/ArcadeCityHall')
          }}
        />
        <Button
          style={FB_BUTTON}
          preset='primary'
          tx='comms.joinOurGlobalFacebookGroup'
          onPress={() => {
            Linking.openURL('https://www.facebook.com/groups/ArcadeCitySquare')
          }}
        />
        <Button
          style={TELEGRAM_BUTTON}
          preset='primary'
          tx='comms.joinOurTelegramGroup'
          onPress={() => {
            Linking.openURL('https://t.me/ArcadeCityCommunity')
          }}
        />
        <Button
          style={WEBSITE_BUTTON}
          tx='comms.visitOurWebsite'
          onPress={() => {
            Linking.openURL('https://arcade.city')
          }}
        />
        <Button
          style={UNISWAP_BUTTON}
          tx='comms.tradeArcadeTokensOnUniswap'
          onPress={() => {
            Linking.openURL(
              'https://v2.info.uniswap.org/pair/0xa2e10137dbe88a10dd197f24efa403f0036e4f70'
            )
          }}
        />

        <Button
          preset='small'
          tx='common.goBack'
          onPress={goBack}
          style={{ marginTop: 50 }}
        />
      </View>
    </Screen>
  )
}

const WEBSITE_BUTTON: ViewStyle = {
  backgroundColor: color.palette.electricViolet,
  marginVertical: spacing[3],
}

const UNISWAP_BUTTON: ViewStyle = {
  // backgroundColor: '#1B2E4F',
  marginVertical: spacing[3],
}

const FB_BUTTON: ViewStyle = {
  marginVertical: spacing[3],
  backgroundColor: '#3b5998',
}

const TWITTER_BUTTON: ViewStyle = {
  backgroundColor: '#00acee',
  marginVertical: spacing[3],
}

const TELEGRAM_BUTTON: ViewStyle = {
  backgroundColor: '#0088cc',
  marginVertical: spacing[3],
}

const CONTAINER: ViewStyle = {
  paddingVertical: spacing[3],
}
