import { Magic as MagicSDK } from '@magic-sdk/react-native'

export const magic = new MagicSDK(process.env.MAGIC_SDK_PK)

export class Magic {
  sdk: MagicSDK

  async setup() {
    this.sdk = magic
  }
}
