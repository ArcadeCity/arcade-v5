import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { StoryScreen, } from 'storybook/views'
import { BlankMap } from './blank-map'
import { RootStoreProvider } from 'stores'
import { rootStore } from 'storybook/demo-data'

storiesOf('Map - BlankMap', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .addDecorator((fn) => (
    <RootStoreProvider value={rootStore}>{fn()}</RootStoreProvider>
  ))
  .addDecorator(reactNavigationDecorator)
  .add('Default', () => <BlankMap />, {
    notes: 'BlankMap renders a Mapbox instance without any data. Data is received from the authStore rather than props.'
  }) 
