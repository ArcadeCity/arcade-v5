import CeramicClient from '@ceramicnetwork/http-client'
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver'
import ThreeIdProvider from '3id-did-provider'
import isocrypto from 'isomorphic-webcrypto'
import { DID } from 'dids'
// import { randomBytes } from 'services/lightning/rng'
// import hex from 'hex-lite'

// declare global {
// type globalThis {    }
// }

// global.crypto = require('isomorphic-webcrypto')

const API_URL = 'https://ceramic-clay.3boxlabs.com'
const ceramic = new CeramicClient(API_URL)
const getPermission = async (request: any) => {
  return request.payload.paths
}

export const ceramicTest = async () => {
  const resolver = ThreeIdResolver.getResolver(ceramic)
  const did = new DID({ resolver })
  ceramic.did = did

  // await global.crypto.ensureSecure()
  // console.log('securrrrinnngggg')

  // console.log('seed?', seed)

  await isocrypto.ensureSecure()
  // const seed = await isocrypto.getRandomValues(32)
  const seed = new Uint8Array([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ])
  const threeId = await ThreeIdProvider.create({
    ceramic,
    getPermission,
    seed,
  })
  console.log(threeId)

  // const seed = await randomBytes(32)
  // console.log('seed:', seed)

  // console.log('crypto here is:', global.crypto)
  // console.log('isocrypto here is:', isocrypto)
  // const seed = await isocrypto.

  // isocrypto.subtle
  //   .digest({ name: 'SHA-256' }, new Uint8Array(seed).buffer)
  //   .then(async (hash) => {
  //     console.log(hex.fromBuffer(hash))
  //     const threeId = await ThreeIdProvider.create({
  //       ceramic,
  //       getPermission,
  //       seed: hex.fromBuffer(hash),
  //     })
  //     console.log(threeId)
  //   })

  // console.log(hash)

  // console.log(global.crypto)

  // const provider = threeId.getDidProvider()
  // ceramic.did.setProvider(provider)

  console.tron.display({
    name: 'Ceramic setup',
    value: { ceramic, resolver, did }, // provider, , threeId - seed
  })

  // await ceramic.did.authenticate()
  // console.log('authed?!')
}
