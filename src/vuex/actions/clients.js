import * as api from 'api/base'
import * as types from './../mutation-types'

const path = 'api/clients'

export const all = ({ dispatch }) => {
  api.all(
    path,
    {},
    clients => {
      dispatch(types.GET_CLIENTS, clients.entity.data)
    },
    () => {}
  )
}
