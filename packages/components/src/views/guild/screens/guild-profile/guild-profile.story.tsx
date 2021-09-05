import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from 'storybook/views'
import { GuildProfile } from './guild-profile'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { RootStoreProvider } from 'stores'
import { rootStore } from 'storybook/demo-data'

// @TODO fix translations for en.guild.created, en.guild.missionStatement, en.guild.viewMemberRoster
storiesOf('Guilds - GuildProfile', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .addDecorator((fn) => (
    <RootStoreProvider value={rootStore}>{fn()}</RootStoreProvider>
  ))
  .addDecorator(reactNavigationDecorator)
  .add(
    'Default',
    () => (
      <Story>
        <UseCase text='GuildProfile' usage='' noPad>
          <GuildProfile />
        </UseCase>
      </Story>
    ),
    {
      notes:
        'GuildProfile renders a screen that displays the GuildSummary, link to the GuildRosterDetail, and other features depending if user is a guild member or not. Data is provided by the guildStore and chatStore rather than props.',
    }
  )
