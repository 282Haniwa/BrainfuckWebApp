import Vue from 'vue'
import './plugins/vuetify'
import router from './router'
import App from './App'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})
