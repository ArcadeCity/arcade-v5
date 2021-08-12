import React from 'react'
import { StyleSheet, View } from 'react-native'
import { WebView } from 'react-native-webview'

export const Avatar = () => {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://arcade.city/janedriver' }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 200,
    height: 200,
    backgroundColor: 'transparent',
  },
})
