import { Instance, types } from 'mobx-state-tree'

export const EventModel = types.model('Event').props({
  id: types.identifier,
  createdAt: types.Date,
})

export interface Event extends Instance<typeof EventModel> {}
