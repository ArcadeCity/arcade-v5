import { display, log } from 'lib'
import { RelayStore } from './relay-store'

export const subscribeToUser = async (self: RelayStore, pubkey: string) => {
  display({
    name: 'subscribeToUser',
    preview: `Subscribing to ${pubkey}`,
  })

  function onEvent(event: any, relay: any) {
    display({
      name: 'Relay onEvent',
      preview: `Received event ${event.id ?? ''}`,
      value: { event, relay },
    })
  }

  self.env.relay.pool.sub({
    cb: onEvent,
    filter: {
      author: pubkey,
    },
  })

  return true
}
