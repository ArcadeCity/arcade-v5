import { Instance, SnapshotOut, types } from 'mobx-state-tree'
import { withEnvironment, withRootStore } from 'stores/_extensions'
import * as actions from './relay-actions'
import { Event, EventModel } from './relay-models'

export const RelayStoreModel = types
  .model('RelayStore')
  .props({
    /** The events we know about */
    events: types.optional(types.map(EventModel), {}),
  })
  .extend(withEnvironment)
  .extend(withRootStore)
  .actions((self) => ({
    subscribeToUser: async (pubkey: string): Promise<boolean> =>
      await actions.subscribeToUser(self as RelayStore, pubkey),
    setEvent(event: Event) {
      self.events?.put(event)
    },
  }))

type RelayStoreType = Instance<typeof RelayStoreModel>
export interface RelayStore extends RelayStoreType {}
type RelayStoreSnapshotType = SnapshotOut<typeof RelayStoreModel>
export interface RelayStoreSnapshot extends RelayStoreSnapshotType {}
export const createRelayStoreDefaultModel = () =>
  types.optional(RelayStoreModel, {})
