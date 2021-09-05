import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from 'storybook/views'
import { GuildRoster } from './guild-roster'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { RootStoreProvider } from 'stores'
import { rootStore } from 'storybook/demo-data'
import { guild1 } from 'storybook/demo-data'

rootStore.guildStore.setGuild(guild1)
storiesOf('Guilds - GuildRoster', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .addDecorator((fn) => (
    <RootStoreProvider value={rootStore}>{fn()}</RootStoreProvider>
  ))
  .addDecorator(reactNavigationDecorator)
  .add(
    'Default',
    () => (
      <Story>
        <UseCase text='GuildRoster' usage='guild roster screen' noPad>
          <GuildRoster />
        </UseCase>
      </Story>
    ),
    {
      notes:
        'GuildRoster renders a Screen containing a list of guild members with each item linking to the user profile. Data is received from the guildStore.',
    }
  )
