import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from 'storybook/views'
import { CharterAdd } from './charter-add'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'

storiesOf('Guilds - CharterAdd', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .addDecorator(reactNavigationDecorator)
  .add(
    'Default',
    () => (
      <Story>
        <UseCase text='CharterAdd' usage='form to link a guild charter' noPad>
          <CharterAdd />
        </UseCase>
      </Story>
    ),
    {
      notes:
        'Guild Charter renders a Screen that allows user to a guild charter. Includes a MenuButton that navigates to a charter example and a TextField for user to input the link to guild charter. User can Save Charter of Add Later. Component does not require external data from props or rootStore.',
    }
  )
