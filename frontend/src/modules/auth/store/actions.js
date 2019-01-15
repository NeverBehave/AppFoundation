import Vue from '@/main'

export default {
  login ({ commit }, { email, password }) {
    return Vue.$axios.post('/auth/login', {
      email,
      password
    }).then((res) => {
      commit('setAuthToken', res.data.token)
      commit('setUserId', res.data.user_id)

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

      return true
    }).catch(() => {
      return false
    })
  },
  reset ({
    commit
  }) {
    commit('setAuthToken', null)
    commit('setUserId', null)

    Vue.$router.push({
      name: 'Login'
    })

    Vue.$toasted.error('Login Expired.')

    return true
  },
  validateUserState ({ getters, dispatch }) {
    if (getters['userId']) {
      return Vue.$axios.get('/auth/getMe').then((res) => {
        if (res.data.user_id !== getters['userId']) {
          console.log('Special: userID does not match current user')
          dispatch('reset') // WTF
        }

        return true
      })
    }

    return false
  }
}
