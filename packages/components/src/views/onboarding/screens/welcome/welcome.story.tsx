import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { RootStore, RootStoreModel, RootStoreProvider } from 'stores'
import { Welcome } from '../welcome'

const store = {
  authStore: {
    saveOnboarded: () => null,
  },
}

const rootStore = RootStoreModel.create(store) as RootStore

storiesOf('Onboarding - Welcome screen', module)
  .addDecorator((fn) => (
    <RootStoreProvider value={rootStore}>{fn()}</RootStoreProvider>
  ))
  .addDecorator(reactNavigationDecorator)
  .add('Default', () => <Welcome />, {
    notes:
      'Welcome renders a Screen containing buttons to select a profession, username, bio, enable location and accept terms. If user is invited they can enter the city. Data is received from the authStore rather than props',
  })
