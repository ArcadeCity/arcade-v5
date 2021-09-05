import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from 'storybook/views'
import { GuildRow } from './guild-row'
import { guild1 } from 'storybook/demo-data'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'

// @TODO story component renders NaN km
storiesOf('Guilds - GuildRow', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .addDecorator(reactNavigationDecorator)
  .add(
    'Default',
    () => (
      <Story>
        <UseCase text='GuildRow' usage='' noPad>
          <GuildRow guild={guild1} measurementUnit='km' />
        </UseCase>
      </Story>
    ),
    {
      notes:
        'GuildRow renders a TouchableOpacity that displays the guild avatar, name, mission, distance from user, and navigates to the guild profile on press. Data is passed in as props: guild of type Guild and measurementUnit of type string',
    }
  )
