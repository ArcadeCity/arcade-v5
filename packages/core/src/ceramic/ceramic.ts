import 'text-encoding-polyfill'
import CeramicClient from '@ceramicnetwork/http-client'
import { TileDocument } from '@ceramicnetwork/stream-tile'
// import { IDX } from '@ceramicstudio/idx'
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver'
import ThreeIdProvider from './threeid-provider'
import { DID } from 'dids'
// import { LightningWallet } from 'stores/wallet-store'
// import { display } from 'lib'

const API_URL = 'https://ceramic-clay.3boxlabs.com'
const getPermission = async (request: any) => {
  return request.payload.paths
}

export class Ceramic {
  client: any

  constructor() {
    this.client = null
  }

  async setup() {
    this.client = new CeramicClient(API_URL)
    return true
  }

  async checkForWallet() {
    // const existing = await this.downloadSecret()
    // console.log('EXISTING:', existing)
  }

  async loadDoc(streamId: string) {
    const doc = await TileDocument.load(this.client, streamId)
    return doc
  }

  async authenticate(secret: Uint8Array | null) {
    const ceramic = this.client
    const authSecret =
      secret ??
      new Uint8Array([
        186, 42, 218, 155, 229, 175, 39, 16, 11, 50, 229, 114, 35, 130, 48, 63,
        165, 33, 183, 18, 45, 29, 81, 131, 65, 171, 43, 5, 58, 31, 246, 31,
      ])
    const authId = 'TestMethod'
    console.log('authSecret:', authSecret)
    const threeId = await ThreeIdProvider.create({
      ceramic,
      getPermission,
      authSecret,
      authId,
    })
    const provider = threeId.getDidProvider()
    const resolver = ThreeIdResolver.getResolver(ceramic)
    const did = new DID({ provider, resolver })
    ceramic.did = did
    await ceramic.did.authenticate()
    console.log({
      name: 'Ceramic authenticate',
      preview: `Authenticated: ${ceramic.did.authenticated.toString()} - ${
        ceramic.did.id
      }`,
    })
    return ceramic.did.authenticated
  }

  // Encrypt the wallet's secret and persist to Ceramic
  async saveWallet(wallet: any) {
    console.log({
      name: 'Ceramic saveWallet',
      preview: `Saving wallet ${wallet.label}`,
      value: wallet,
    })

    const walletToSave = {
      baseUri: wallet.baseUri,
      chain: wallet.label,
      createdAt: wallet.createdAt,
      secret: wallet.secret,
    }

    const doc = await TileDocument.create(this.client, { wallet: walletToSave })
    const streamId = doc.id.toString()

    console.log({
      name: 'Ceramic saveWallet',
      preview: `Saved wallet with streamId: ${streamId}`,
      value: wallet,
    })

    return streamId
  }
}
