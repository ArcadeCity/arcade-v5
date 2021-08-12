import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, } from 'storybook/views'
import { LoadSplash } from './load-splash'
 
storiesOf('LoadSplash', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Default', () => <LoadSplash />, {
    notes: 'LoadSplash renders a View with Arcade City splash screen. No props needed, styling and image are defined internally.'
  })
