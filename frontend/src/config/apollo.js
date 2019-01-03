import Vue from 'vue'
import {
  ApolloClient
} from 'apollo-client'
import {
  createHttpLink
} from 'apollo-link-http'
import {
  InMemoryCache
} from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

import { store } from '@/store'

const authFetch = (uri, options) => {
  let token = store.getters['auth/token']
  let auth = new Headers()
  if (token) {
    auth.append({
      'Authorization': token
    })
  }
  return fetch(uri, {
    ...options,
    headers: auth
  })
}

const httpLink = createHttpLink({
  uri: 'https://api.graphcms.com/simple/v1/awesomeTalksClone',
  fetch: authFetch
})

// 创建 apollo 客户端
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

// 安装 vue 插件
Vue.use(VueApollo)

export default apolloProvider
