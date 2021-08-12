import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Story, StoryScreen, UseCase } from 'storybook/views'
import { InviteStatus } from '.'

storiesOf('Onboarding - InviteStatus', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Invited true/false', () => (
    <Story>
      <UseCase text='Default' usage='' noPad>
        <InviteStatus />
      </UseCase>
      <UseCase text='Invited true' usage='' noPad>
        <InviteStatus invited={true} />
      </UseCase>
      <UseCase text='Invited false' usage='' noPad>
        <InviteStatus invited={false} />
      </UseCase>
    </Story>
  ))
