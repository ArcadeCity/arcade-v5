import React, { useEffect } from 'react'
import { Alert } from 'react-native'
import { observer } from 'mobx-react-lite'
import { useNavigation } from '@react-navigation/native'
import { useStores } from 'stores'
import { Button, MenuButton, Screen } from 'views/shared'
import { ProfileSummary } from 'views/social'
import { images } from 'views/theme'
import { translate } from 'i18n'
import { capitalize } from 'lodash'

export const MainMenu: React.FC<{}> = observer(() => {
  // Nav
  const { navigate, setOptions } = useNavigation()
  useEffect(() => {
    setOptions({ title: 'Menu' })
  }, [])

  // State
  const { authStore } = useStores()
  const bio = authStore.bio
  const geo = authStore.geo
  const profession = authStore.profession
  const username = authStore.username
  const city = geo
    ? `${geo.city}, ${geo.region}, ${geo.isoCountryCode}`
    : 'Unknown' // TODO: Get from authStore view(?)

  const onClickLogout = () => {
    Alert.alert('Log out', translate('common.areYouSure'), [
      {
        text: capitalize(translate('common.no')),
        style: 'cancel',
      },
      {
        text: capitalize(translate('common.yes')),
        style: 'destructive',
        onPress: authStore.logout,
      },
    ])
  }

  return (
    <Screen preset='scrollStack' key={authStore?.locale}>
      <ProfileSummary
        // avatar={profilePicture}
        bio={bio}
        city={city}
        // forOnPress={() => navigate('setProfilePicture')}
        forOnPress={() => {}}
        identityVerified={false}
        level={0}
        username={username}
        profession={profession}
      />

      <Button tx='social.editProfile' onPress={() => navigate('profileEdit')} />

      {/* <MenuButton
        image={images.tokenreceive}
        // @TODO need translation for 'Wallet'
        title='Wallet'
        onPress={() => navigate('wallet')}
      /> */}

      <MenuButton
        image={images.refer}
        titleTx='comms.invites'
        onPress={() => navigate('invites')}
      />

      <MenuButton
        image={images.refer}
        titleTx='comms.connect'
        onPress={() => navigate('connect')}
      />

      <MenuButton
        image={images.inboxActive}
        titleTx='comms.feedback'
        onPress={() => navigate('feedback')}
      />

      <MenuButton
        image={images.note}
        titleTx='comms.changelog'
        onPress={() => navigate('changelog')}
      />

      <MenuButton
        image={images.mapActive}
        titleTx='comms.changeLanguage'
        onPress={() => navigate('changeLanguage')}
      />

      <MenuButton
        image={images.logout}
        titleTx='comms.logout'
        onPress={onClickLogout}
        last
      />
    </Screen>
  )
})
