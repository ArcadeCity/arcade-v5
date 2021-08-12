import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from 'storybook/views'
import { UpdatedModal } from '../updated-modal'

const props = {
  headline: 'App updated',
  text: "You've upgraded to 5.0.0a",
}

storiesOf('UpdatedModal', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('In UseCase', () => (
    <Story>
      <UseCase text='UpdatedModal' usage='The updated modal' noPad>
        <UpdatedModal {...props} />
      </UseCase>
    </Story>
  ), {
    notes: 'UpdatedModal renders a View displaying a customizeable headline and text. Data is passed in as props: headline of type string and text of type string.'
  })

