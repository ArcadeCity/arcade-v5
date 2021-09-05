import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { RootStore, RootStoreModel, RootStoreProvider } from 'stores'
import { EnableLocation } from '../enable-location'

const store = {
  authStore: {
    enableLocation: () => null,
  },
}

const rootStore = RootStoreModel.create(store) as RootStore

storiesOf('Onboarding - EnableLocation screen', module)
  .addDecorator((fn) => (
    <RootStoreProvider value={rootStore}>{fn()}</RootStoreProvider>
  ))
  .addDecorator(reactNavigationDecorator)
  .add('Default', () => <EnableLocation />, {
    notes:
      'EnableLocation renders a Screen containing an explanation on why location data is needed and how it is used, along with a button to enable. Data is received from the authStore rather than props',
  })
