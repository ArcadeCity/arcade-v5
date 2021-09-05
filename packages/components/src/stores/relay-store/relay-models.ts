import { Instance, types } from 'mobx-state-tree'

export const EventModel = types.model('Event').props({
  id: types.identifier,
  createdAt: types.Date,
  content: types.string,
  sig: types.string,
  kind: types.number,
  pubkey: types.string,
})

export interface Event extends Instance<typeof EventModel> {}
