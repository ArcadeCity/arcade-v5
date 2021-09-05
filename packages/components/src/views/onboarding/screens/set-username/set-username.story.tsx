import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { RootStore, RootStoreModel, RootStoreProvider } from 'stores'
import { SetUsername } from '../set-username'
import { authedPlayer } from 'storybook/demo-data'

const store = {
  authStore: {
    username: authedPlayer.username,
    saveUsername: () => null,
  },
}

const rootStore = RootStoreModel.create(store) as RootStore

storiesOf('Onboarding - SetUsername screen', module)
  .addDecorator((fn) => (
    <RootStoreProvider value={rootStore}>{fn()}</RootStoreProvider>
  ))
  .addDecorator(reactNavigationDecorator)
  .add('Default', () => <SetUsername />, {
    notes:
      'SetUsername renders a Screen containing a form for user to update their username. Data is received from the authStore rather than props',
  })
