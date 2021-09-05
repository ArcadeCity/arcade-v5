import { display, log } from 'lib'
import { RelayStore } from './relay-store'

export const subscribeToUser = async (self: RelayStore, pubkey: string) => {
  display({
    name: 'subscribeToUser',
    preview: `Subscribing to ${pubkey}`,
  })

  function onEvent(event: any, relay: any) {
    relay && relay.url
      ? console.log(
          `got an event from ${relay.url} which is already validated.`,
          event
        )
      : log(event)
  }

  self.env.relay.pool.sub({
    cb: onEvent,
    filter: {
      author: pubkey,
    },
  })

  return true
}
