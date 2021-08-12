import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { StoryScreen, } from 'storybook/views'
import { MapScreen } from './map-screen'
import { RootStoreProvider } from 'stores'
import { rootStore } from 'storybook/demo-data'

// @TODO fix storybook not rendering NearbyReport
storiesOf('Map - MapScreen', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .addDecorator((fn) => (
    <RootStoreProvider value={rootStore}>{fn()}</RootStoreProvider>
  ))
  .addDecorator(reactNavigationDecorator)
  .add('Default', () => <MapScreen />, {
    notes: 'MapScreen renders a Screen including a Map and NearbyReport. No props are accepted.'
  }) 
