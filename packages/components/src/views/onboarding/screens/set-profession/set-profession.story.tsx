import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { RootStore, RootStoreModel, RootStoreProvider } from 'stores'
import { SetProfession } from '../set-profession'
import { authedPlayer } from 'storybook/demo-data'

const store = {
  authStore: {
    bio: authedPlayer.bio,
  },
}

const rootStore = RootStoreModel.create(store) as RootStore

storiesOf('Onboarding - SetProfession screen', module)
  .addDecorator((fn) => (
    <RootStoreProvider value={rootStore}>{fn()}</RootStoreProvider>
  ))
  .addDecorator(reactNavigationDecorator)
  .add('Default', () => <SetProfession />, {
    notes: 'SetProfession renders a Screen containing a form for user to update their profession. Selecting other displays a list of categories and selecting a category displays a list of subcategories. After selecting a profession, user will be asked to confirm before saving. Data is received from the authStore rather than props'
  })
