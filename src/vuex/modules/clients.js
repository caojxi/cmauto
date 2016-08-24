import {
  GET_CLIENTS
} from './../mutation-types'

const state = {
  all: [],
  client: null
}

const mutations = {
  [GET_CLIENTS](state, clients) {
    state.all = clients
  }
}

export default { state, mutations }
