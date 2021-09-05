import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { RootStore, RootStoreModel, RootStoreProvider } from 'stores'
import { Terms } from '../terms'

const store = {
  authStore: {
    saveTermsAgree: () => null,
  },
}

const rootStore = RootStoreModel.create(store) as RootStore

storiesOf('Onboarding - Terms screen', module)
  .addDecorator((fn) => (
    <RootStoreProvider value={rootStore}>{fn()}</RootStoreProvider>
  ))
  .addDecorator(reactNavigationDecorator)
  .add('Default', () => <Terms />, {
    notes:
      'Terms renders a Screen containing the Arcade City Terms and Service Agreement with a button to agree. Data is received from the authStore rather than props',
  })
