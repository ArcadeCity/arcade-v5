import { Magic as MagicSDK } from '@magic-sdk/react-native'
import { ethers } from 'ethers'

export const magic = new MagicSDK(process.env.REACT_APP_MAGIC_SDK_PK ?? '')
// @ts-ignore
export const provider = new ethers.providers.Web3Provider(magic.rpcProvider)

export class Magic {
  sdk: MagicSDK

  constructor() {
    this.sdk = magic
  }

  async setup() {}
}
