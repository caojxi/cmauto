import Vue from 'vue'
import VueRouter from 'vue-router'
import { configRouter } from './routes'
import { client } from './api/api-client'

// require external libraries
require('es6-promise').polyfill()
window.$ = window.jQuery = require('jquery')
window.bootstrap = require('bootstrap')

// setup components
import installComponents from './components/index'
installComponents(Vue)

Vue.use(VueRouter)
// create router
export const router = new VueRouter({
  history: false,
  transitionOnLoad: true
})
configRouter(router)

const App = Vue.extend(require('./app'))

function plugins(Vue) {
  Vue.client = client
}

Vue.use(plugins)

router.start(App, 'app')
