import { Alert } from 'react-native'
import * as Updates from 'expo-updates'
import { display } from 'lib'
import { delay } from './delay'

export const checkForUpdates = async () => {
  // try {
  if (__DEV__) return
  const check = await Updates.checkForUpdateAsync()
  if (check.isAvailable) {
    // Alert.alert('Downloading update...')
    let update
    try {
      update = await Updates.fetchUpdateAsync()
      await delay(500)
      await Updates.reloadAsync()
    } catch (e) {
      !__DEV__ &&
        Alert.alert('Update downloaded. Reopen app to use new version')
      display({
        name: 'checkForUpdates',
        preview: 'Not updating',
        value: { update },
      })
    }
  }
  // } catch (e) {
  //   display({
  //     name: 'checkForUpdates',
  //     preview: `${e.code}`,
  //     value: { e },
  //   })
  // }
}
