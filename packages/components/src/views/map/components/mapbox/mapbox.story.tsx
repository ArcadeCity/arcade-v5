import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { StoryScreen, } from 'storybook/views'
import { Mapbox } from './mapbox'

// @TODO fix mapbox required props
storiesOf('Map - Mapbox', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .addDecorator(reactNavigationDecorator)
  .add('Default', () => <Mapbox userAuthed={true} />, {
    notes: 'Mapbox renders a static instance of MapBox. Data is passed in as props: centerCoordinates of type Coordinat, zoomLevel of type number, and optional style object.'
  }) 
