import CeramicClient from '@ceramicnetwork/http-client'
import { TileDocument } from '@ceramicnetwork/stream-tile'
import { DID } from 'dids'
import { Ed25519Provider } from 'key-did-provider-ed25519'
import KeyDidResolver from 'key-did-resolver'

const API_URL = 'https://ceramic-clay.3boxlabs.com'

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
    const provider = new Ed25519Provider(authSecret)
    const resolver = KeyDidResolver.getResolver()
    const did = new DID({ provider, resolver })
    ceramic.did = did
    await ceramic.did.authenticate()
    console.log(
      `Ceramic authenticated: ${ceramic.did.authenticated.toString()} - ${
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
