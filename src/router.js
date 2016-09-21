export default (router) => {
  router.map({
    // Home
    '/': {
      name: 'home',
      component: require('./views/home')
    },
    // Themes
    '/themes': {
      name: 'themes',
      component: require('./views/themes')
    },
    // Info
    '/info': {
      name: 'info',
      component: require('./views/info')
    }
  })
}
