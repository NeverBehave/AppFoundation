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
import {
  onError
} from 'apollo-link-error'
import VueApollo from 'vue-apollo'

import store from '@/store'

const authFetch = (uri, options) => {
  let token = store.getters['auth/token']
  let headers = options.headers

  if (token) {
    console.log('add auth header')
    console.log(token)
    headers = {
      ...headers,
      token: token
    }
  }

  return fetch(uri, {
    ...options,
    headers: headers
  })
}

const errorLink = onError(({
  networkError
}) => {
  if (networkError.statusCode && networkError.statusCode === 401) {
    store.dispatch('auth/reset')
  }
})

const httpLink = createHttpLink({
  fetch: authFetch,
  uri: process.env.NODE_ENV === 'production' ? store.getters['home/API'] : 'http://localhost:4000/data'
})

const link = errorLink.concat(httpLink)

// 创建 apollo 客户端
const apolloClient = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
  connectToDevTools: process.env.NODE_ENV === 'production'
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

// 安装 vue 插件
Vue.use(VueApollo)

export default apolloProvider
