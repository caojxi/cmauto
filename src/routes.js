export function configRouter(router) {
  router.map({
    '/': {
      // root
      component: require('./app'),
      subRoutes: {

        // auth pages

        // admin pages
        '/admin': {
          auth: true,
          component: require('./pages/template'),
          subRoutes: {
            '/': { component: require('./pages/services/create'), name: 'admin.index' }
          }
        }
      }
    }
  })
}
