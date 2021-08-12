import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { RootStore, RootStoreModel, RootStoreProvider } from 'stores'
import { EnableNotifications } from '../enable-notifications'

const store = {
  authStore: {
    enableNotifications: () => null,
  },
}

const rootStore = RootStoreModel.create(store) as RootStore

storiesOf('Onboarding - EnableNotifications screen', module)
  .addDecorator((fn) => (
    <RootStoreProvider value={rootStore}>{fn()}</RootStoreProvider>
  ))
  .addDecorator(reactNavigationDecorator)
  .add('Default', () => <EnableNotifications />, {
    notes: 'EnableNotifications renders a Screen containing an explanation on why to enable push notifications along with a button to enable. Data is received from the authStore rather than props'
  })
