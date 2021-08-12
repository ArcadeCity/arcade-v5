import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { StoryScreen, } from 'storybook/views'
import { Connect } from './connect'

storiesOf('Connect', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .addDecorator(reactNavigationDecorator)
  .add('Default', () => <Connect />, {
    notes: 'Connect renders a Screen containing links to Arcade City Twitter, Facebook, Telegram, Website, and Uniswap. No props are accepted.'
  })
