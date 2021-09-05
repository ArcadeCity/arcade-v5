import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from 'storybook/views'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { WelcomeHeader } from '../welcome-header'

storiesOf('Onboarding - WelcomeHeader screen', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .addDecorator(reactNavigationDecorator)
  .add(
    'Default',
    () => (
      <Story>
        <UseCase text='WelcomeHeader' usage='' noPad>
          <WelcomeHeader />
        </UseCase>
      </Story>
    ),
    {
      notes:
        'WelcomeHeader renders a View containing a message to welcome user to Arcade City. No props are accepted.',
    }
  )
