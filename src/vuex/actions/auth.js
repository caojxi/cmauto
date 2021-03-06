import { router } from './../../bootstrap'
import auth from 'api/auth'
import * as types from './../mutation-types'

export const login = ({ dispatch }, credentials) => {
  auth.login(
    credentials,
    (response) => {
      dispatch(types.SET_CURRENT_USER, response.entity.user.data)
      router.go({ name: 'admin' })
    },
    () => {}
  )
}
