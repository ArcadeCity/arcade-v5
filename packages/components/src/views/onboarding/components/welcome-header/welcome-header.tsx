import React from 'react'
import { TextStyle, View, ViewStyle } from 'react-native'
import { Text } from 'views/shared'

export const WelcomeHeader: React.FC<{}> = () => (
  <View style={CONTAINER}>
    <View style={{ flexDirection: 'row' }}>
      <Text preset='title' tx='onboarding.welcomeToArcadeCity' style={TEXT} />
    </View>
    <View style={{ marginBottom: 5 }}>
      <Text
        preset='description'
        tx='comms.setupProfile'
        style={{ fontSize: 18 }}
      />
    </View>
  </View>
)

const CONTAINER: ViewStyle = {
  flex: 1,
  justifyContent: 'flex-start',
  marginTop: 50,
  width: '100%',
  zIndex: 3,
  alignItems: 'center',
  height: 110,
}

const TEXT: TextStyle = { marginBottom: 15, fontWeight: '400' }
