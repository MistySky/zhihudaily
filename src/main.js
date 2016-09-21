import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import RouterMap from './router'

// Router
Vue.use(VueRouter)
const router = new VueRouter()
RouterMap(router)
router.start(App, '#app')
