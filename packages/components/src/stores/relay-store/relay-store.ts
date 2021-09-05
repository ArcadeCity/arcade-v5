import { Instance, SnapshotOut, types } from 'mobx-state-tree'
import { withEnvironment, withRootStore } from 'stores/_extensions'
import * as actions from './relay-actions'

export const RelayStoreModel = types
  .model('RelayStore')
  .props({
    messages: types.frozen(),
  })
  .extend(withEnvironment)
  .extend(withRootStore)
  .actions((self) => ({
    hello: async (): Promise<boolean> =>
      await actions.hello(self as RelayStore),
  }))

type RelayStoreType = Instance<typeof RelayStoreModel>
export interface RelayStore extends RelayStoreType {}
type RelayStoreSnapshotType = SnapshotOut<typeof RelayStoreModel>
export interface RelayStoreSnapshot extends RelayStoreSnapshotType {}
export const createRelayStoreDefaultModel = () =>
  types.optional(RelayStoreModel, {})
