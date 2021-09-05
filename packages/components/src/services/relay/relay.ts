import { relayPool } from 'nostr-tools'

export class Relay {
  constructor() {
    console.log('Created Relay')
    const pool = relayPool()
    console.log('pool:', pool)
  }

  async setup() {}
}
