import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { values } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useNavigation } from '@react-navigation/native'
import { useStores } from 'stores'
import { Screen } from 'views/shared'
import { ProfileSummary } from 'views/social'

export const NearbyPlayers: React.FC<{}> = observer(() => {
  // Nav
  const { navigate, setOptions } = useNavigation()
  useEffect(() => {
    setOptions({ title: 'Nearby PlayersSet Your Bio' })
  }, [])

  // State
  const { playerStore } = useStores()
  const { players } = playerStore

  return (
    <Screen preset='scrollStack'>
      {values(players).map((player: any) => {
        if (player?.nearby) {
          const {
            id,
            bio,
            city,
            identityVerified,
            level,
            profession,
            profilePicture,
            username,
          } = player
          const onPress = () =>
            navigate('ride', {
              screen: 'profile',
              params: { username },
            })
          return (
            <TouchableOpacity onPress={onPress}>
              <ProfileSummary
                key={id}
                avatar={profilePicture}
                bio={bio}
                city={city}
                forOnPress={onPress}
                identityVerified={identityVerified}
                level={level}
                username={username}
                profession={profession}
              />
            </TouchableOpacity>
          )
        } else return null
      })}
    </Screen>
  )
})
