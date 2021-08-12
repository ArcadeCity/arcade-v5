import axios from 'axios'
import Echo from 'laravel-echo'
import { display } from 'lib'
import Pusher from 'pusher-js/react-native'
import { Alert } from 'react-native'

export class Broadcasting {
  echo: any
  pusher: any

  constructor() {
    this.echo = null
    this.pusher = null
  }

  async setupClient(token: string | undefined) {
    if (!token) {
      Alert.alert('Error initializing chat')
      return
    }
    // Pusher.logToConsole = true
    this.pusher = new Pusher('be6264cfdc1c9edb8a7f', {
      cluster: 'us2',
      authEndpoint: 'https://arcade.city/broadcasting/auth',
      auth: {
        headers: {
          Authorization: 'Bearer ' + token,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
      authorizer: (channel) => {
        return {
          authorize: (socketId, callback) => {
            axios
              .post(
                'https://arcade.city/broadcasting/auth',
                {
                  socket_id: socketId,
                  channel_name: channel.name,
                },
                { headers: { Authorization: 'Bearer ' + token } }
              )
              .then((response) => {
                callback(null, response.data)
                display({
                  name: 'Broadcasting',
                  preview: `Authorized with channel ${channel.name}`,
                  value: response,
                })
              })
              .catch((error) => {
                display({
                  name: 'Broadcasting',
                  preview: `Error authorizing with channel ${channel.name}`,
                  value: error,
                  important: true,
                })
                callback(null, error)
              })
          },
        }
      },
    })

    this.echo = new Echo({
      broadcaster: 'pusher',
      client: this.pusher,
    })
  }
}
