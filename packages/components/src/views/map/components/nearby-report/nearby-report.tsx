import React from 'react'
import { View, ViewStyle } from 'react-native'
import { observer } from 'mobx-react-lite'
import { useNavigation } from '@react-navigation/native'
import { useStores } from 'stores'
import { Text, Button } from 'views/shared'
import { color } from 'views/theme'

export const NearbyReport: React.FC<{ button?: boolean }> = observer(
  ({ button = false }) => {
    const { navigate } = useNavigation()
    const { playerStore } = useStores()
    const nearby = playerStore.nearby

    return nearby.success ? (
      <View style={DRIVEROVERLAY}>
        <Text
          tx='map.usersNearYou'
          txOptions={{ distance: nearby.within, unit: nearby.unit }}
          preset='title3'
          style={{ marginBottom: 20 }}
        />
        {Object.entries(nearby.nearby).map((nearbo: any) => (
          <Text text={`${nearbo[0]}: ${nearbo[1]}`} preset='descriptionSlim' />
        ))}
        {button && (
          <Button
            tx='map.viewNearbyPlayers'
            onPress={() => navigate('nearbyPlayers')}
            style={{ marginTop: 20 }}
          />
        )}

        {/* <Text
                text="We could use help recruiting! Revenue-share referral codes go live later this week. Stay tuned!"
                preset="bold"
                style={{ marginTop: 20, textAlign: 'center', paddingHorizontal: 10 }}
            /> */}
      </View>
    ) : null
  }
)

const CONTAINER: ViewStyle = {
  position: 'absolute',
  bottom: 70,
  left: 25,
  right: 25,
  justifyContent: 'center',
  alignItems: 'center',
}

const DRIVEROVERLAY: ViewStyle = {
  ...CONTAINER,
  bottom: 50,
  backgroundColor: color.background,
  borderRadius: 8,
  padding: 20,
  shadowOpacity: 0.8,
  shadowRadius: 12,
  shadowColor: 'rgba(91, 32, 242, 0.2)',
  shadowOffset: {
    width: 0,
    height: 0,
  },
  borderWidth: 2,
  borderColor: color.palette.portGore,
  zIndex: 8000,
}
