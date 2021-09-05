import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { RootStore, RootStoreModel, RootStoreProvider } from 'stores'
import { InviteRequired } from '../invite-required'
import { authedPlayer } from 'storybook/demo-data'

const store = {
  authStore: {
    invited: authedPlayer.invited,
  },
}

const rootStore = RootStoreModel.create(store) as RootStore

storiesOf('Onboarding - InviteRequired screen', module)
  .addDecorator((fn) => (
    <RootStoreProvider value={rootStore}>{fn()}</RootStoreProvider>
  ))
  .addDecorator(reactNavigationDecorator)
  .add('Default', () => <InviteRequired />, {
    notes:
      'InviteRequired renders a Screen containing instruction on how to get an invite along with links to Set up account, Connect, and Logout. Data is received from the authStore rather than props',
  })
