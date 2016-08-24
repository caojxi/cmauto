import clients from 'api/clients'
import * as types from './../mutation-types'

export const getAllClients = ({ dispatch }) => {
  clients.all(
    clients => {
      dispatch(types.GET_CLIENTS, clients)
    },
    () => {}
  )
}
