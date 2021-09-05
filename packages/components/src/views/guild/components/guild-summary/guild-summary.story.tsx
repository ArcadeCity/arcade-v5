import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from 'storybook/views'
import { GuildSummary } from './guild-summary'
import { guild1 } from 'storybook/demo-data'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'

storiesOf('Guilds - GuildSummary', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .addDecorator(reactNavigationDecorator)
  .add(
    'Default',
    () => (
      <Story>
        <UseCase text='GuildSummary' usage='' noPad>
          <GuildSummary
            name={guild1.name}
            description={guild1.mission}
            cityName={'Austin'}
            members={[]}
            insertedAt={new Date()}
          />
        </UseCase>
      </Story>
    ),
    {
      notes:
        'GuildSummary renders a View of the Guild including the avatar, name, city, mission, time of creation. Data is passed in as props: name of type string, description of type string, cityName of type string, members of type string, insertedAt of type string, and uri which is the optional ref to guild avatar',
    }
  )
