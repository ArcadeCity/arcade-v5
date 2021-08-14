import { Magic as MagicSDK } from '@magic-sdk/react-native'
import { ethers } from 'ethers'

export const magic = new MagicSDK('pk_live_EC27C09F3906D5F3' ?? '') // process.env.REACT_APP_MAGIC_SDK_PK
// @ts-ignore
export const provider = new ethers.providers.Web3Provider(magic.rpcProvider)

export class Magic {
  sdk: MagicSDK

  constructor() {
    this.sdk = magic
  }

  async setup() {}
}
