import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { RootStore, RootStoreModel, RootStoreProvider } from 'stores'
import { NearbyReport } from '../nearby-report'

const store = {
  playerStore: {
    nearby: {
      success: true,
      within: 5,
      unit: 'km',
      nearby: { Rider: 4, Driver: 2, Entrepreneur: 1 },
    },
  },
}

const rootStore = RootStoreModel.create(store) as RootStore

storiesOf('Map - NearbyReport', module)
  .addDecorator((fn) => (
    <RootStoreProvider value={rootStore}>{fn()}</RootStoreProvider>
  ))
  .addDecorator(reactNavigationDecorator)
  .add('Default', () => <NearbyReport />)
  .add('With button', () => <NearbyReport button={true} />)
  .add('No button', () => <NearbyReport button={false} />)
