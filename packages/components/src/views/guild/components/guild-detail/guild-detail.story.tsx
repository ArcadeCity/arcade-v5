import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import { StoryScreen, Story, UseCase } from 'storybook/views'
import { GuildDetail } from './guild-detail'
import { guild1 } from 'storybook/demo-data'
 
storiesOf('Guilds - GuildDetail', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Story>
      <UseCase text='GuildDetail' usage='' noPad>
        <GuildDetail
          button={boolean('button', true)}
          navigateTo={() => {}}
          selectedGuild={guild1}
        />
      </UseCase>
    </Story>
  ), {
    notes: 'GuildDetail renders a view with information about the guild name and mission and a button taking user to the guild profile. Button can be toggled off using the button prop'
  })
