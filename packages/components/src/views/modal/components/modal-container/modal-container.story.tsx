import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, } from 'storybook/views'
import { ModalContainer } from './modal-container'
import { reactNavigationDecorator } from 'storybook/navigation-decorator'
import { RootStoreProvider } from 'stores'
import { rootStore } from 'storybook/demo-data'
import { ModalName } from 'stores/modal-store'
 
storiesOf('ModalContainer', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .addDecorator(reactNavigationDecorator)
  .addDecorator(fn => <RootStoreProvider value={rootStore}>{fn()}</RootStoreProvider>)
  .add('DEFAULT', () => <ModalContainer />, {
    notes: 'ModalContainer renders an Animated View containing one of 6 modals depending on the name set in the modalStore. Available names are ADD_DETAILS, ADD_CARD, REQUEST_ACTIVE, REQUEST_BEGIN, REQUEST_CONFIRM, REQUEST_VIEW'
  })
  .add('ADD_CARD', () => {
    rootStore.modalStore.setName(ModalName.ADD_CARD)
    return <ModalContainer />
  }, {
    notes: 'ModalContainer renders an Animated View containing one of 6 modals depending on the name set in the modalStore. Available names are ADD_DETAILS, ADD_CARD, REQUEST_ACTIVE, REQUEST_BEGIN, REQUEST_CONFIRM, REQUEST_VIEW'
  })
  .add('ADD_DETAILS', () => {
    rootStore.modalStore.setName(ModalName.ADD_DETAILS)
    return <ModalContainer />
  }, {
    notes: 'ModalContainer renders an Animated View containing one of 6 modals depending on the name set in the modalStore. Available names are ADD_DETAILS, ADD_CARD, REQUEST_ACTIVE, REQUEST_BEGIN, REQUEST_CONFIRM, REQUEST_VIEW'
  })
  .add('REQUEST_ACTIVE', () => {
    rootStore.modalStore.setName(ModalName.REQUEST_ACTIVE)
    return <ModalContainer />
  }, {
    notes: 'ModalContainer renders an Animated View containing one of 6 modals depending on the name set in the modalStore. Available names are ADD_DETAILS, ADD_CARD, REQUEST_ACTIVE, REQUEST_BEGIN, REQUEST_CONFIRM, REQUEST_VIEW'
  })
  .add('REQUEST_BEGIN', () => {
    rootStore.modalStore.setName(ModalName.REQUEST_BEGIN)
    return <ModalContainer />
  }, {
    notes: 'ModalContainer renders an Animated View containing one of 6 modals depending on the name set in the modalStore. Available names are ADD_DETAILS, ADD_CARD, REQUEST_ACTIVE, REQUEST_BEGIN, REQUEST_CONFIRM, REQUEST_VIEW'
  })
  .add('REQUEST_CONFIRM', () => {
    rootStore.modalStore.setName(ModalName.REQUEST_CONFIRM)
    return <ModalContainer />
  }, {
    notes: 'ModalContainer renders an Animated View containing one of 6 modals depending on the name set in the modalStore. Available names are ADD_DETAILS, ADD_CARD, REQUEST_ACTIVE, REQUEST_BEGIN, REQUEST_CONFIRM, REQUEST_VIEW'
  })
  .add('REQUEST_VIEW', () => {
    rootStore.modalStore.setName(ModalName.REQUEST_VIEW)
    return <ModalContainer />
  }, {
    notes: 'ModalContainer renders an Animated View containing one of 6 modals depending on the name set in the modalStore. Available names are ADD_DETAILS, ADD_CARD, REQUEST_ACTIVE, REQUEST_BEGIN, REQUEST_CONFIRM, REQUEST_VIEW'
  })