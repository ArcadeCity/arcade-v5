import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from 'storybook/views'
import { GuildProfileEdit } from './guild-profile-edit'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { RootStoreProvider } from 'stores'
import { rootStore } from 'storybook/demo-data'

// @TODO fix translations for en.guild.editMissionStatement and en.guild.saveMissionStatement
storiesOf('Guilds - GuildProfileEdit', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .addDecorator((fn) => (
    <RootStoreProvider value={rootStore}>{fn()}</RootStoreProvider>
  ))
  .addDecorator(reactNavigationDecorator)
  .add(
    'Default',
    () => (
      <Story>
        <UseCase text='GuildProfileEdit' usage='example charter screen' noPad>
          <GuildProfileEdit />
        </UseCase>
      </Story>
    ),
    {
      notes:
        'GuildProfileEdit renders a Screen where user can edit the guild mission statement and save',
    }
  )
