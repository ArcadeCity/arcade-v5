import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from 'storybook/views'
import { NearbyGuilds } from './nearby-guilds'
import { guild1, rootStore } from 'storybook/demo-data'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { RootStoreProvider } from 'stores'

rootStore.guildStore.setGuild(guild1)

storiesOf('Guilds - NearbyGuilds', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .addDecorator((fn) => (
    <RootStoreProvider value={rootStore}>{fn()}</RootStoreProvider>
  ))
  .addDecorator(reactNavigationDecorator)
  .add(
    'Default',
    () => (
      <Story>
        <UseCase text='NearbyGuilds' usage='' noPad>
          <NearbyGuilds guilds={[guild1]} />
        </UseCase>
      </Story>
    ),
    {
      notes:
        'NearbyGuilds renders a View containing a list of guilds nearby with each item being a GuildRow. Data is passed in as props: guilds of type Guild[]',
    }
  )
