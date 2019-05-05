import Vue from 'vue'
import './plugins/vuetify'
import store from './store'
import router from './router'
import App from './App'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store: store,
  router: router,
  components: { App },
  template: '<App/>'
})
