// import * as React from 'react'
// import { storiesOf } from '@storybook/react-native'
// import { StoryScreen, Story, UseCase } from 'storybook/views'
// import { GuildIntro } from './guild-intro'
// import { reactNavigationDecorator } from 'storybook/navigation-decorator'
// import { RootStoreProvider } from 'stores'
// import { rootStore } from 'storybook/demo-data'

// storiesOf('Guilds - GuildIntro', module)
//   .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
//   .addDecorator((fn) => (
//     <RootStoreProvider value={rootStore}>{fn()}</RootStoreProvider>
//   ))
//   .addDecorator(reactNavigationDecorator)
//   .add('Default', () => (
//     <Story>
//       <UseCase text='GuildIntro' usage='example charter screen' noPad>
//         <GuildIntro />
//       </UseCase>
//     </Story>
//   ), {
//     notes: 'GuildIntro'
//   })

// @TODO fix problem rendering GuildIntro in storybook:
// (0, _mobxReactLite.inject) is not a function
// related to using @inject
