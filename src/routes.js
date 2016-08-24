export function configRouter(router) {
  router.map({
    '/': {
      // root
      component: require('./app'),
      subRoutes: {

        // auth pages
        '/auth': {
          component: require('./pages/auth/template'),
          subRoutes: {
            '/': { component: require('./pages/auth/login'), name: 'auth.login' }
          }
        },

        // admin pages
        '/admin': {
          auth: true,
          component: require('./pages/template'),
          subRoutes: {
            '/': { component: require('./pages/services/create'), name: 'admin' }
          }
        },

        // client pages
        '/clients': {
          auth: true,
          component: require('./pages/template'),
          subRoutes: {
            '/': { component: require('./pages/clients/index'), name: 'clients' }
          }
        }
      }
    }
  })
}
