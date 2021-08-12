import {
  Api,
  Broadcasting,
  Ceramic,
  Lightning,
  Magic,
  Mapbox,
} from '@arcadecity/core/src'

// import { Api } from '../services/api'
// import { Broadcasting } from '../services/broadcasting'
// import { Ceramic } from '../services/ceramic'
// import { Lightning } from '../services/lightning'
// import { Magic } from '../services/magic'
// import { Mapbox } from '../services/mapbox'
// import { Solana } from '../services/solana'

let ReactotronDev
if (__DEV__) {
  const { Reactotron } = require('../services/reactotron')
  ReactotronDev = Reactotron
}

/**
 * The environment is a place where services and shared dependencies between
 * models live.  They are made available to every model via dependency injection.
 */
export class Environment {
  constructor() {
    // create each service
    if (__DEV__) {
      // dev-only services
      this.reactotron = new ReactotronDev()
    }
    this.api = new Api()
    this.broadcasting = new Broadcasting()
    this.ceramic = new Ceramic()
    this.lightning = new Lightning()
    this.magic = new Magic()
    this.mapbox = new Mapbox({
      accessToken:
        'pk.eyJ1IjoiYWNsaW9ucyIsImEiOiJjamVhMmNtY2swaXNtMnBsbnB2aDVqNTBiIn0.gM_i1jhawFz2EpKBX4VmwQ',
      baseUrl: 'https://api.mapbox.com/geocoding/v5/mapbox.places/',
    })
    // this.solana = new Solana()
  }

  async setup() {
    // allow each service to setup
    if (__DEV__) {
      await this.reactotron.setup()
    }
    this.api.setup()
    await this.ceramic.setup()
    await this.magic.setup()
    // await this.solana.setup()
  }

  /**
   * Reactotron is only available in dev.
   */
  reactotron: typeof ReactotronDev

  /**
   * Our api.
   */
  api: Api

  /**
   * To manage broadcasting
   */
  broadcasting: Broadcasting

  /**
   * Decentralized storage
   */
  ceramic: Ceramic

  /**
   * Lightning via ArcadeHub
   */
  lightning: Lightning

  /**
   * Magic SDK
   */
  magic: Magic

  /**
   * Mapbox
   */
  mapbox: Mapbox

  /**
   * Solana blockchain
   */
  // solana: Solana
}
