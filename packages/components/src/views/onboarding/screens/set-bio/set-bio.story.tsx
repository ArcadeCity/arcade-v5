import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { RootStore, RootStoreModel, RootStoreProvider } from 'stores'
import { SetBio } from '../set-bio'
import { authedPlayer } from 'storybook/demo-data'

const store = {
  authStore: {
    bio: authedPlayer.bio,
  },
}

const rootStore = RootStoreModel.create(store) as RootStore

storiesOf('Onboarding - SetBio screen', module)
  .addDecorator((fn) => (
    <RootStoreProvider value={rootStore}>{fn()}</RootStoreProvider>
  ))
  .addDecorator(reactNavigationDecorator)
  .add('Default', () => <SetBio />, {
    notes:
      'SetBio renders a Screen containing a form for user to update their bio. Data is received from the authStore rather than props',
  })
