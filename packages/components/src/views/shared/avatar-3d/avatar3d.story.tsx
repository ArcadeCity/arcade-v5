import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from 'storybook/views'
import { Avatar } from './avatar2'

storiesOf('Avatar 3D', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Default', () => (
    <Story>
      <UseCase text='Default' usage='display 3D avatar'>
        <Avatar />
      </UseCase>
    </Story>
  ), {
    notes: 'Avatar renders a View containing a Canvas rendering a 3D representing the user profile picture.'
  })
