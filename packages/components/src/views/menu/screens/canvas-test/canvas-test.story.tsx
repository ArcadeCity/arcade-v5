import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen } from 'storybook/views'
import { CanvasTest } from './canvas-test'

storiesOf('CanvasTest', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Default', () => <CanvasTest />, {
    notes:
      'CanvasTest renders a View containing an HTML Canvas. Configuration and styling is determined internally.',
  })
