import CeramicClient from '@ceramicnetwork/http-client'
import { TileDocument } from '@ceramicnetwork/stream-tile'
import { DID } from 'dids'
import { Ed25519Provider } from 'key-did-provider-ed25519'
import KeyDidResolver from 'key-did-resolver'
import { IDX } from '@ceramicstudio/idx'

const API_URL = 'https://ceramic-clay.3boxlabs.com'
const aliases = {
  arweave: 'kjzl6cwe1jw1464kscnkfne9ui7bkv5qt1nzds9dmv09vetjs1qemvh3jzm1vxi',
}
const KEY = aliases.arweave

export class Ceramic {
  client: any
  idx: any

  constructor() {
    this.client = null
    this.idx = null
  }

  async setup() {
    this.client = new CeramicClient(API_URL)
    this.idx = new IDX({ ceramic: this.client, aliases })
    return true
  }

  async checkForWallet() {
    const existing = await this.downloadSecret()
    console.log('EXISTING:', existing)
  }

  async uploadSecret(payload: any) {
    const jwe = await this.client.did?.createDagJWE(payload, [
      this.client.did.id,
    ])
    await this.idx.set(KEY, jwe)
  }

  async downloadSecret() {
    const jwe = await this.idx.get(KEY)
    return jwe ? await this.client.did?.decryptDagJWE(jwe) : null
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
    return ceramic.did.authenticated
  }

  // Encrypt the wallet's secret and persist to Ceramic
  async saveWallet(wallet: any) {
    const walletToSave = {
      balance: wallet.balance,
      baseUri: wallet.baseURI,
      chain: wallet.label,
      // createdAt: wallet.createdAt,
      secret: wallet.secret,
    }

    console.log('walletToSave:', walletToSave)

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
