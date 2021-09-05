import { relayPool } from 'nostr-tools'

export class Relay {
  constructor() {
    const pool = relayPool()
    pool.addRelay('wss://freedom-relay.herokuapp.com/ws')
    console.log('Created Relay with pool:', pool)
  }

  async setup() {}
}
