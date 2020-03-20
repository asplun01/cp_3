import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import results from './mock-data.js'

let data = {
  pokemon: results,
  team: [],
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
