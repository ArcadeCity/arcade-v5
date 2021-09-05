import { relayPool } from 'nostr-tools'

export class Relay {
  pool: any

  constructor() {
    this.pool = null
  }

  async setup() {
    const pool = relayPool()
    pool.addRelay('wss://freedom-relay.herokuapp.com/ws', {
      read: true,
      write: true,
    })
    this.pool = pool
    console.tron.display({
      name: 'Relay',
      preview: 'Setup Relay with pool:',
      value: pool,
    })
  }
}

// example callback function for a subscription
// function onEvent(event: any, relay: any) {
//   relay && relay.url
//     ? console.log(
//         `got an event from ${relay.url} which is already validated.`,
//         event
//       )
//     : console.log(event)
// }

// subscribing to a single user
// author is the user's public key
// pool.sub({
//   cb: onEvent,
//   filter: {
//     author:
//       '645981d1d595fb60bbfd6539a82a8808f2a17e95c94694196d7ba81a587d659a',
//   },
// })
