import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { StoryScreen } from 'storybook/views'
import { StaticMap } from './static-map'
import { MONARCH_COORDS } from 'stores/service-store/dummy-data'

storiesOf('Map - StaticMap', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .addDecorator(reactNavigationDecorator)
  .add(
    'Default',
    () => (
      <StaticMap
        centerCoordinate={[MONARCH_COORDS.latitude, MONARCH_COORDS.longitude]}
        zoomLevel={11}
      />
    ),
    {
      notes:
        'StaticMap renders a static instance of MapBox. Data is passed in as props: centerCoordinates of type Coordinat, zoomLevel of type number, and optional style object.',
    }
  )
