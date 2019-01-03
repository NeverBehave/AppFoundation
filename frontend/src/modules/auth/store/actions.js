import Vue from '@/main'

export default {
  login ({ commit }, { email, password }) {
    return Vue.$axios.post('/auth/login', {
      email,
      password
    }).then((res) => {
      commit('setAuthToken', res.data.token)
      Vue.$router.push({
        'name': 'DashBoard'
      })
      return true
    }).catch((err) => {
      console.log(err)
      return false
    })
  },
  register (ctx, { email, password }) {
    return Vue.$axios.post('/auth/register', {
      email, password
    }).then((res) => {
      Vue.$toasted.success(res.data.message)
      Vue.$router.push({
        'name': 'Login'
      })
    }).catch(() => {
      return false
    })
  },
  reset ({
    commit
  }) {
    commit('setAuthToken', null)
    Vue.$router.push({
      name: 'Login'
    })
    Vue.$toasted.error('Login Expired.')
    return true
  }
}
