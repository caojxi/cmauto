import Vue from 'vue'
import Vuex from 'vuex'

import { VALIDATE_FORM, SET_CURRENT_USER } from './mutation-types'

Vue.use(Vuex)

const state = {
  currentUser: null,
  formIsValid: false
}

const mutations = {
  [VALIDATE_FORM](state, flag) {
    state.formIsValid = flag
  },

  [SET_CURRENT_USER](state, user) {
    state.currentUser = user
  }
}

import clients from './modules/clients'

export default new Vuex.Store({
  state,
  mutations,
  modules: {
    clients
  }
})
