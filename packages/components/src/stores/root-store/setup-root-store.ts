import { onSnapshot } from 'mobx-state-tree'
import { RootStoreModel, RootStore } from './root-store'
import { Environment } from '../environment'
import * as storage from 'lib/storage'
import { display, log } from 'lib'

/**
 * The key we'll be saving our state as within async storage.
 */
const ROOT_STATE_STORAGE_KEY = 'root129'

/**
 * Setup the environment that all the models will be sharing.
 *
 * The environment includes other functions that will be picked from some
 * of the models that get created later. This is how we loosly couple things
 * like events between models.
 */
export async function createEnvironment() {
  const env = new Environment()
  await env.setup()
  return env
}

/**
 * Setup the root state.
 */
export async function setupRootStore(store: any) {
  let rootStore: RootStore
  let data: any

  // prepare the environment that will be associated with the RootStore.
  const env = await createEnvironment()

  if (store) {
    rootStore = RootStoreModel.create(store, env)

    return rootStore
  }

  try {
    // load data from storage
    data = (await storage.load(ROOT_STATE_STORAGE_KEY)) || {}
    rootStore = RootStoreModel.create(data, env)

    const apiToken = data?.authStore?.tokens?.api
    if (apiToken) {
      env.api.apisauce.setHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiToken}`,
      })
      display({
        name: 'API token',
        preview: 'Rehydrated API service with token',
        value: apiToken,
      })
    }
  } catch (e) {
    // if there's any problems loading, then let's at least fallback to an empty state
    // instead of crashing.
    rootStore = RootStoreModel.create({}, env)

    // but please inform us what happened
    log(`ROOTSTORE ERROR: ${e.message}`, null)
  }

  // reactotron logging
  if (__DEV__) {
    env.reactotron.setRootStore(rootStore, data)
  }

  // track changes & save to storage
  onSnapshot(rootStore, (snapshot) =>
    storage.save(ROOT_STATE_STORAGE_KEY, snapshot)
  )

  rootStore.authStore.setLoggingIn(false)

  return rootStore
}
