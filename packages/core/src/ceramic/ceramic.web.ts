import CeramicClient from '@ceramicnetwork/http-client'
import { TileDocument } from '@ceramicnetwork/stream-tile'
// import { IDX } from '@ceramicstudio/idx'
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver'
import ThreeIdProvider from './threeid-provider'
import { DID } from 'dids'
// import { LightningWallet } from 'stores/wallet-store'
// import { display } from 'lib'
import { Ed25519Provider } from 'key-did-provider-ed25519'
import KeyDidResolver from 'key-did-resolver'

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

  async authenticate(secret: Uint8Array | null) {
    const ceramic = this.client
    const authSecret =
      secret ??
      new Uint8Array([
        186, 42, 218, 155, 229, 175, 39, 16, 11, 50, 229, 114, 35, 130, 48, 63,
        165, 33, 183, 18, 45, 29, 81, 131, 65, 171, 43, 5, 58, 31, 246, 31,
      ])
    // const authId = 'TestMethod1'
    // const threeId = await ThreeIdProvider.create({
    //   ceramic,
    //   getPermission,
    //   authSecret,
    //   authId,
    // })
    const provider = new Ed25519Provider(authSecret)
    // const provider = threeId.getDidProvider()
    // const resolver = ThreeIdResolver.getResolver(ceramic)
    const resolver = KeyDidResolver.getResolver()
    const did = new DID({ provider, resolver })
    ceramic.did = did
    await ceramic.did.authenticate()
    console.log(
      `Ceramic Authenticated: ${ceramic.did.authenticated.toString()} - ${
        ceramic.did.id
      }`
    )
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
