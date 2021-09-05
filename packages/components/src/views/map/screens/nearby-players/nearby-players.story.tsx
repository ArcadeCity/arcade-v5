import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { StoryScreen } from 'storybook/views'
import { NearbyPlayers } from './nearby-players'
import { RootStoreProvider } from 'stores'
import { rootStore } from 'storybook/demo-data'

storiesOf('Map - NearbyPlayers', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .addDecorator((fn) => (
    <RootStoreProvider value={rootStore}>{fn()}</RootStoreProvider>
  ))
  .addDecorator(reactNavigationDecorator)
  .add('Default', () => <NearbyPlayers />, {
    notes:
      'NearbyPlayers renders a Screen containing a list of nearby players. Each nearby player renders a PlayerSummary. Data is received from the playerStore rather than props.',
  })
