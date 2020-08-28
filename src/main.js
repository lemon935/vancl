import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Mint from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css'
Vue.use(Mint);

import router from '../src/assets/js/router.js'
import '../src/assets/css/cssreset.css'

//数据
import store from '../src/assets/js/data.js'
import Vuex from 'vuex'

Vue.use(Vuex)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
