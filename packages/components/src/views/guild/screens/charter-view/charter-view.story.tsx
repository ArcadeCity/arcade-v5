import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from 'storybook/views'
import { CharterView } from './charter-view'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'

storiesOf('Guilds - CharterView', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .addDecorator(reactNavigationDecorator)
  .add(
    'Default',
    () => (
      <Story>
        <UseCase text='CharterView' usage='example charter screen' noPad>
          <CharterView />
        </UseCase>
      </Story>
    ),
    {
      notes:
        'CharterView renders a screen explaining the concept of a charter and with a Button that links to the guilds charter.',
    }
  )
