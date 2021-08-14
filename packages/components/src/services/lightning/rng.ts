/**
 * @fileOverview creates an rng module that will bring all calls to 'crypto'
 * into one place to try and prevent mistakes when touching the crypto code.
 */

import crypto from 'isomorphic-webcrypto'
// import crypto from 'crypto'
// uses `crypto` module under nodejs/cli and shim under RN
// @see blue_modules/crypto.js

/**
 * Generate cryptographically secure random bytes using native api.
 * @param  {number}   size      The number of bytes of randomness
 * @return {Promise.<Buffer>}   The random bytes
 */
export async function randomBytes(size) {
  await crypto.ensureSecure()
  const array = new Uint8Array(size)
  const bytes = crypto.getRandomValues(array)
  console.log('bytes:', bytes)
  return bytes
  // return new Promise((resolve, reject) => {

  //   crypto.getRandomValues(size)

  //   crypto.randomBytes(size, (err, data) => {
  //     if (err) reject(err)
  //     else resolve(data)
  //   })
  // })
}
