import { Instance, SnapshotOut, types } from 'mobx-state-tree'
import { AuthStoreModel } from '../auth-store'
import { ChatStoreModel } from '../chat-store'
import { GuildStoreModel } from '../guild-store'
import { ModalStoreModel } from '../modal-store'
import { PlayerStoreModel } from '../player-store'
import { RelayStoreModel } from 'stores/relay-store'
import { ServiceStoreModel } from '../service-store'
import { WalletStoreModel } from '../wallet-store'

/**
 * A RootStore model.
 */
export const RootStoreModel = types
  .model('RootStore')
  .props({
    authStore: types.optional(AuthStoreModel, {} as any),
    chatStore: types.optional(ChatStoreModel, {} as any),
    guildStore: types.optional(GuildStoreModel, {} as any),
    modalStore: types.optional(ModalStoreModel, {} as any),
    playerStore: types.optional(PlayerStoreModel, {} as any),
    relayStore: types.optional(RelayStoreModel, {} as any),
    serviceStore: types.optional(ServiceStoreModel, {} as any),
    walletStore: types.optional(WalletStoreModel, {} as any),
  })
  .actions((self) => ({
    reset() {
      self.authStore.reset()
      self.chatStore.reset()
      self.modalStore.reset()
      self.playerStore.reset()
      self.serviceStore.reset()
      self.walletStore.reset()
      self.guildStore.reset()
    },
  }))

type RootStoreType = Instance<typeof RootStoreModel>
export interface RootStore extends RootStoreType {}
type RootStoreSnapshotType = SnapshotOut<typeof RootStoreModel>
export interface RootStoreSnapshot extends RootStoreSnapshotType {}
export const createRootStoreDefaultModel = () =>
  types.optional(RootStoreModel, {})
