import { ensureUser } from '../../middleware/validators'
import * as rsvp from './controller'

export const baseUrl = '/rsvp'

export default [
  {
    method: 'POST',
    route: '/',
    handlers: [
      ensureUser,
      rsvp.createRsvp
    ]
  },
  {
    method: 'GET',
    route: '/',
    handlers: [
      ensureUser,
      rsvp.getRsvp
    ]
  },
]
