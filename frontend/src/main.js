import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/config'
import apolloProvider from '@/config/apollo'

const v = new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')

export default v
