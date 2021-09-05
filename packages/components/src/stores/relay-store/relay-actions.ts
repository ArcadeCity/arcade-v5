import { display } from 'lib'
import { RelayStore } from './relay-store'

export const subscribeToUser = async (self: RelayStore, pubkey: string) => {
  display({
    name: 'subscribeToUser',
    preview: `Subscribing to ${pubkey}`,
  })
  return true
}
