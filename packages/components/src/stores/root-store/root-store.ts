import { Instance, SnapshotOut, types } from 'mobx-state-tree'

/**
 * A RootStore model.
 */
export const RootStoreModel = types
  .model('RootStore')
  .props({})
  .actions((self) => ({
    reset() {},
  }))

type RootStoreType = Instance<typeof RootStoreModel>
export interface RootStore extends RootStoreType {}
type RootStoreSnapshotType = SnapshotOut<typeof RootStoreModel>
export interface RootStoreSnapshot extends RootStoreSnapshotType {}
export const createRootStoreDefaultModel = () =>
  types.optional(RootStoreModel, {})
