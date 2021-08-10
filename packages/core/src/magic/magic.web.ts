import { Magic as MagicSDK } from 'magic-sdk'

export const magic = new MagicSDK(process.env.REACT_APP_MAGIC_SDK_PK)

export class Magic {
  sdk: MagicSDK

  async setup() {
    this.sdk = magic
  }
}
