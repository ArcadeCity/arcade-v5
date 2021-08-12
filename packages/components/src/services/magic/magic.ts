import { Magic as MagicSDK } from '@magic-sdk/react-native'

export const magic = new MagicSDK('pk_live_4C679FE162F04FDC')

export class Magic {
  sdk: MagicSDK

  async setup() {
    this.sdk = magic
  }
}
