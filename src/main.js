// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routerConfig from './router/'
import FastClick from 'fastclick'
import store from './vuex/index'
import Vuex from 'vuex'

window.addEventListener('load', () => {
	FastClick.attach(document.body)
})

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueRouter)

const router = new VueRouter({routes: routerConfig})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
