import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { StoryScreen, } from 'storybook/views'
import { MapHome } from './map-home'
import { RootStoreProvider } from 'stores'
import { rootStore } from 'storybook/demo-data'

storiesOf('Map - MapHome', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .addDecorator((fn) => (
    <RootStoreProvider value={rootStore}>{fn()}</RootStoreProvider>
  ))
  .addDecorator(reactNavigationDecorator)
  .add('Default', () => <MapHome />, {
    notes: 'MapHome renders a Screen for RequestActive or MapIdle depending if serviceStore has an active service request. Data is received from the serviceStore rather than props.'
  }) 
