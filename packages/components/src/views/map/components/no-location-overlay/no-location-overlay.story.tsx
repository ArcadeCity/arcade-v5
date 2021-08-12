import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { StoryScreen, } from 'storybook/views'
import { NoLocationOverlay } from './no-location-overlay'

storiesOf('Map - NoLocationOverlay', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .addDecorator(reactNavigationDecorator)
  .add('Default', () => <NoLocationOverlay />, {
    notes: 'NoLocationOverlay renders a View with the text "Waiting for location". No props are accepted.'
  }) 
