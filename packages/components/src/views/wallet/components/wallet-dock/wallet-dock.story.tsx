import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from 'storybook/views'
import { WalletDock } from '../wallet-dock'

storiesOf('Wallet - WalletDock', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('In UseCase', () => (
    <Story>
      <UseCase text='WalletDock' usage='' noPad>
        <WalletDock />
      </UseCase>
    </Story>
  ), {
    notes: 'WalletDock renders a View containing three buttons: Request, Pay, and Trade. No props are accepted.'
  })
