import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from 'storybook/views'
import { InviteDetail } from './invite-detail'
import { guild1, player1, rootStore } from 'storybook/demo-data'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { RootStoreProvider } from 'stores'

rootStore.guildStore.setGuild(guild1)

storiesOf('Guilds - InviteDetail', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .addDecorator((fn) => (
    <RootStoreProvider value={rootStore}>{fn()}</RootStoreProvider>
  ))
  .addDecorator(reactNavigationDecorator)
  .add('In UseCase', () => (
    <Story>
      <UseCase text='GuildInvites' usage='' noPad>
        <InviteDetail
          guild={guild1}
          invitingPlayerId={player1.id}
          when={new Date()}
          forOnPress={() => {}}
          deleteAllInvites={rootStore.guildStore.deleteAllInvites}
        />
      </UseCase>
    </Story>
  ), {
    notes: 'GuildInvites renders a TouchableOpacity with information about the guild invite including guild name and description of the guild. Data is passed in as props: forOnPress of type function, guild of type Guild, when of type Date, invitingPlayerId of type number, and deleteAllInvites of type function'
  })
