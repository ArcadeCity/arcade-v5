import { useEffect, useRef } from 'react'
import { Alert, Platform } from 'react-native'
import Constants from 'expo-constants'
import * as Notifications from 'expo-notifications'
import { ExpoPushToken } from 'expo-notifications'
import { Subscription } from '@unimodules/core'
import { display } from 'lib'
import { useStores } from 'stores'
import { getConstants } from 'lib/getConstants'

export const usePushNotifications = () => {
  const { authStore } = useStores()
  const notificationListener = useRef<Subscription>()
  const responseListener = useRef<Subscription>()
  const { isDevice } = getConstants()

  useEffect(() => {
    isDevice &&
      registerForPushNotificationsAsync().then(
        (token) => token && authStore.savePushToken(token)
      )

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        const body = notification.request.content.body
        const data = notification.request.content.data
        display({
          name: 'usePushNotifications',
          preview: 'addNotificationReceivedListener note:',
          value: { notification, body, data },
          important: true,
        })
      })

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        const body = response.notification.request.content.body
        const data = response.notification.request.content.data
        display({
          name: 'usePushNotifications',
          preview: 'addNotificationResponseReceivedListener response:',
          value: { response, body, data },
          important: true,
        })
      })

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current)
      Notifications.removeNotificationSubscription(responseListener.current)
    }
  }, [])
}

async function registerForPushNotificationsAsync() {
  let token: ExpoPushToken
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync()
    let finalStatus = existingStatus
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync()
      finalStatus = status
    }
    if (finalStatus !== 'granted') {
      Alert.alert('Failed to get push token for push notification!')
      return false
    }
    token = await Notifications.getExpoPushTokenAsync({
      experienceId: '@arcadecity/app5',
    }) // .data
  } else {
    Alert.alert('Must use physical device for Push Notifications')
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    })
  }

  return token
}
