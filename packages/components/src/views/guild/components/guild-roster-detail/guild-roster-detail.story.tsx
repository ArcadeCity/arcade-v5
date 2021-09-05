import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from 'storybook/views'
import { GuildRosterDetail } from './guild-roster-detail'
import { guild1, rootStore } from 'storybook/demo-data'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { RootStoreProvider } from 'stores'

rootStore.guildStore.setGuild(guild1)
rootStore.guildStore.setSelectedGuild(guild1.id)

// @TODO story component renders 0 members
storiesOf('Guilds - GuildRosterDetail', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .addDecorator((fn) => (
    <RootStoreProvider value={rootStore}>{fn()}</RootStoreProvider>
  ))
  .addDecorator(reactNavigationDecorator)
  .add(
    'Default',
    () => (
      <Story>
        <UseCase text='GuildRosterDetail' usage='' noPad>
          <GuildRosterDetail />
        </UseCase>
      </Story>
    ),
    {
      notes:
        'GuildRosterDetail renders a TouchableOpacity that lists guild members and navigates to the specific guild member on press. Data is provided by guildStore rather than props',
    }
  )
