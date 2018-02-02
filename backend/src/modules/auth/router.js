import { ensureUser } from '../../middleware/validators'
import * as auth from './controller'

export const baseUrl = '/auth'

export default [
  {
    method: 'POST',
    route: '/',
    handlers: [
      auth.authUser
    ]
  },
  {
    method: 'GET',
    route: '/confirm/:id',
    handlers: [
      auth.confirmUser
    ]
  },
  {
    method: 'POST',
    route: '/reset',
    handlers: [
      auth.sendResetEmail
    ]
  },
  {
    method: 'POST',
    route: '/password/update',
    handlers: [
      ensureUser,
      auth.resetPassword
    ]
  }
]
