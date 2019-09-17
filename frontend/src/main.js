import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/config'

const v = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default v
