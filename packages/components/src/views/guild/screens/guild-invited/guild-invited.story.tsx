import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from 'storybook/views'
import { GuildInvited } from './guild-invited'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { RootStoreProvider } from 'stores'
import { rootStore } from 'storybook/demo-data'

// @TODO fix translation for en.guild.invitedToJoin2

storiesOf('Guilds - GuildInvited', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .addDecorator((fn) => (
    <RootStoreProvider value={rootStore}>{fn()}</RootStoreProvider>
  ))
  .addDecorator(reactNavigationDecorator)
  .add(
    'Default',
    () => (
      <Story>
        <UseCase text='GuildInvited' usage='example charter screen' noPad>
          <GuildInvited />
        </UseCase>
      </Story>
    ),
    {
      notes:
        'GuildInvited renders a screen that displays the name of the guild with Buttons to join or ignore',
    }
  )
