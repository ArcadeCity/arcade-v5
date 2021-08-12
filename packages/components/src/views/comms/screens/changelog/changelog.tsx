import React from 'react'
import { Linking, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button, Screen, Text } from 'views/shared'
import { CONTAINER, LONGDIVIDER } from '../../styles'

export const Changelog: React.FC<{}> = () => {
  const { setOptions } = useNavigation()
  setOptions({ title: 'Changelog' })
  return (
    <Screen preset='scrollStack'>
      <View style={CONTAINER}>
        <Text
          preset='title2'
          text='v5.1.0 - Payments'
          style={{ marginTop: 20 }}
        />
        <Text
          preset='bold'
          text='31 August 2021 - App store download'
          style={{ marginVertical: 6 }}
        />
        <Text
          preset='description'
          text='- All players now have a Bitcoin Lightning wallet for easy peer-to-peer payments.'
        />

        <Text preset='title2' text='v5.0.2' style={{ marginTop: 20 }} />
        <Text
          preset='bold'
          text='30 July 2021 - App store download'
          style={{ marginVertical: 6 }}
        />
        <Text
          preset='description'
          text='- Players can now change their language in the menu. Added Spanish and Portuguese (BR) translations.'
        />

        <Text preset='title2' text='v5.0.1' style={{ marginTop: 20 }} />
        <Text
          preset='bold'
          text='6 July 2021 - App store download'
          style={{ marginVertical: 6 }}
        />
        <Text
          preset='description'
          text='- Service requests, region chat, and guild creation have been enabled for all invited users.'
        />

        <Text
          preset='title2'
          text='v5.0.0 - Relaunch'
          style={{ marginTop: 20 }}
        />

        <Text
          preset='bold'
          text='25 June 2021 - Over the air update - 5.0.0d'
          style={{ marginVertical: 6 }}
        />
        <Text preset='description' text='- Fix issue getting player location' />

        <Text
          preset='bold'
          text='24 June 2021 - Over the air update - 5.0.0c'
          style={{ marginVertical: 6 }}
        />
        <Text preset='description' text='- Smoother update process' />

        <Text
          preset='bold'
          text='23 June 2021 - Over the air update - 5.0.0b'
          style={{ marginVertical: 6 }}
        />
        <Text preset='description' text='- Added Invites screen to menu' />

        <Text
          preset='description'
          text='- Added changelog link to login screen'
        />

        <Text
          preset='description'
          text='- Map screen shows the number of players within 50km and their professions'
        />

        <Text
          preset='bold'
          text='14 June 2021 - Over the air update - 5.0.0a'
          style={{ marginVertical: 6 }}
        />
        <Text
          preset='description'
          text='- Players waiting for an invite can now set up their profile: profession, username, bio, location.'
        />

        <Text
          preset='bold'
          text='1 June 2021 - App store download'
          style={{ marginVertical: 6 }}
        />
        <Text
          preset='description'
          text='- All player accounts have been reset. New accounts now require an invite from another player.'
        />
        {/* <Text preset='description' text='- Fix icons not showing on iOS 14' /> */}

        <View style={LONGDIVIDER} />
        <Text
          preset='title2'
          text='v4.1.0 - Service Requests!'
          style={{ marginTop: 20 }}
        />
        <Button
          text='[Video] Service Requests Walkthrough'
          onPress={() =>
            Linking.openURL('https://www.youtube.com/watch?v=6oxRD8_UveE')
          }
          style={{ marginVertical: 10 }}
        />

        <Text
          preset='bold'
          text='3 Oct 2020 - App store download'
          style={{ marginVertical: 6 }}
        />
        <Text
          preset='description'
          text='- Enabled peer-to-peer service requests for all users: rides, deliveries, and more'
        />
        <Text
          preset='description'
          text='- Chat: Major overhaul. Region chatrooms have been reset. Chats appear in reverse chronological order. Chats include user avatar or icon for region chatroom. Click a user avatar to view their profile and open a 1-on-1 chat.'
        />
        <Text
          preset='description'
          text='- Map: Overlay can be toggled hidden'
        />
        <Text
          preset='description'
          text="- Nearby: Removed 'nearby users' list. Use service requests and region chatrooms to connect with nearby users."
        />
        <Text
          preset='description'
          text='- Navigation: Fixed issue where you might get stuck in a sub-view of a tab screen: now just tap the tab a second time'
        />
        <Text preset='description' text='- Terms: Added terms of service' />
        <Text
          preset='description'
          text='- Classes: Added Caterer and Dancer classes'
        />
        <Text
          preset='description'
          text='- And nine thousand billion other bug fixes and improvements'
        />
        <View style={LONGDIVIDER} />
        <Text preset='title2' text='v4.0.2' style={{ marginTop: 20 }} />
        <Text
          preset='bold'
          text='8 Sept 2020 - App store download'
          style={{ marginVertical: 6 }}
        />
        <Text
          preset='description'
          text='- Map: You can view a list of user profiles within 50km'
        />
        <Text
          preset='description'
          text="- Profiles: You can see a user's profile picture, bio, username, primary class, and identity verified; and can start a 1-on-1 chat"
        />

        <Text
          preset='description'
          text="- Chat: You can click on a user's avatar to view their profile"
        />
        <Text
          preset='description'
          text='- Chat: Messages you send are a different color than messages received'
        />
        <Text
          preset='description'
          text='- Menu: Added ability to upload a profile picture'
        />
        <Text
          preset='description'
          text='- Menu: Added profile summary like other users see, including ID verified badge'
        />
        <Text
          preset='description'
          text='- Menu: Moved change bio, username, and primary class options to separate Edit Profile screen'
        />
        <Text
          preset='description'
          text='- Changelog: Added a Known Issues section for bugs we know about'
        />
        <View style={LONGDIVIDER} />
        <Text preset='title2' text='v4.0.1' style={{ marginTop: 20 }} />
        <Text
          preset='bold'
          text='4 Sept 2020 - App store download'
          style={{ marginVertical: 6 }}
        />
        <Text
          preset='description'
          text='- Menu: Added this changelog, including app walkthrough videos'
        />
        <Text
          preset='description'
          text='- Menu: Added identity verification screen to profile menu; includes verification status'
        />
        <Text
          preset='description'
          text='- Map: Added anonymized and approximate (obfuscated) user locations to the map'
        />
        <Text
          preset='description'
          text='- Map: Added summary of user class count within 50km to the map'
        />
        <Text
          preset='description'
          text='- Fixed blue-screen error when logging out and in again'
        />

        <View style={LONGDIVIDER} />

        <Text preset='title2' text='v4.0.0' style={{ marginTop: 20 }} />
        <Text
          preset='bold'
          text='1 Sept 2020 - App store download'
          style={{ marginVertical: 6 }}
        />
        <Text preset='description' text='- Reset the database' />
        <Text
          preset='description'
          text='- Replaced Facebook login with SMS login'
        />
        <Text
          preset='description'
          text='- New onboarding process with optional identity verification'
        />
        <Text
          preset='description'
          text='- New users are automatically added to chat channels for their city, region and class'
        />

        <View style={LONGDIVIDER} />

        <Text preset='title2' text='Roadmap' style={{ marginTop: 20 }} />
        <Text preset='description' text='Features coming soon:' />
        <Text preset='descriptionSlim' text='- Guilds' />
        <Text preset='descriptionSlim' text='- Web profiles' />
        <Text preset='descriptionSlim' text='- Referral codes' />
        <Text preset='descriptionSlim' text='- In-app payments' />
        <Text preset='descriptionSlim' text='- Service ratings' />
        <Text preset='descriptionSlim' text='- Token rewards' />
        <Text preset='description' text='- Experience point (XP) system' />

        <View style={LONGDIVIDER} />
        <Text preset='title2' text='Update types' style={{ marginTop: 20 }} />
        <Text preset='description' text='There are two types of updates:' />
        <Text
          preset='description'
          text='App store downloads - Requires downloading the updated version from the Play Store or App Store'
        />
        <Text
          preset='description'
          text='Over-the-air updates (OTA) - Downloaded in the background when you open the app. Small updates will complete and load right away; larger updates will download in the background and take effect the next time you close/open the app.'
        />
      </View>
    </Screen>
  )
}
