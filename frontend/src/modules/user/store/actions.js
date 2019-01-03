import Vue from '@/main'

export default {
  getMe ({ commit }) {
    return Vue.$axios.get('/user/getMe').then((res) => {
      console.log(res.data.user)
      commit('setUserData', res.data.user)
      return true
    }).catch((err) => {
      console.log(err)
      Vue.$toasted.error(err)
      return false
    })
  }
}
