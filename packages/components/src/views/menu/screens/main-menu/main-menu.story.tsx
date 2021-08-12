import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, } from 'storybook/views'
import { MainMenu } from './main-menu'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { RootStoreProvider } from 'stores'
import { rootStore } from 'storybook/demo-data'
 
storiesOf('MainMenu', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .addDecorator((fn) => (
    <RootStoreProvider value={rootStore}>
      {fn()}
    </RootStoreProvider>
  ))
  .addDecorator(reactNavigationDecorator)
  .add('Default', () => <MainMenu />, {
    notes: 'MainMenu renders a Screen with user profile summary and links to invites, connect, feedback, changelog, edit profile and logout. Data is taken from the authStore rather than props.'
  })
