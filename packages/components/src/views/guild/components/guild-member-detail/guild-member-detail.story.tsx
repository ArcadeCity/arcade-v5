import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from 'storybook/views'
import { GuildMemberDetail } from './guild-member-detail'
import { guild1, player1, rootStore } from 'storybook/demo-data'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { RootStoreProvider } from 'stores'

rootStore.guildStore.setGuild(guild1)

storiesOf('Guilds - GuildMemberDetail', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .addDecorator((fn) => (
    <RootStoreProvider value={rootStore}>{fn()}</RootStoreProvider>
  ))
  .addDecorator(reactNavigationDecorator)
  .add(
    'Default',
    () => (
      <Story>
        <UseCase text='GuildMemberDetail' usage='' noPad>
          <GuildMemberDetail forOnPress={() => {}} player={player1} />
        </UseCase>
      </Story>
    ),
    {
      notes:
        'GuildMemberDetail returns a TouchableOpacity that can direct to the guild member profile on press. Accepts forOnPress function as a prop as well as player prop of type Player',
    }
  )
