import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from 'storybook/views'
import { CharterExample } from './charter-example'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'

storiesOf('Guilds - CharterExample', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .addDecorator(reactNavigationDecorator)
  .add('Default', () => (
    <Story>
      <UseCase text='CharterExample' usage='example charter screen' noPad>
        <CharterExample />
      </UseCase>
    </Story>
  ), {
    notes: 'CharterExample renders a screen presenting an example of a charter displaying rules and regulations for Arcade City Austin'
  })
