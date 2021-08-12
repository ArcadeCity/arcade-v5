import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { StoryScreen, } from 'storybook/views'
import { Feedback } from './feedback'

storiesOf('Feedback', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .addDecorator(reactNavigationDecorator)
  .add('Default', () => <Feedback />, {
    notes: 'Feedback renders a Screen containing a form to provide feedback to Arcade City. No props are accepted.'
  })
