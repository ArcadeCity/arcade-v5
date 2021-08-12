import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from 'storybook/views'
import { GuildHome } from './guild-home'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { RootStoreProvider } from 'stores'
import { rootStore } from 'storybook/demo-data'

storiesOf('Guilds - GuildHome', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .addDecorator((fn) => (
    <RootStoreProvider value={rootStore}>{fn()}</RootStoreProvider>
  ))
  .addDecorator(reactNavigationDecorator)
  .add('Default', () => (
    <Story>
      <UseCase text='GuildHome' usage='example charter screen' noPad>
        <GuildHome />
      </UseCase>
    </Story>
  ), {
    notes: 'GuildHome renders a screen that explains the concept of guilds and links to the example charter and create guild screen'
  })
