import Vue from '@/main'

export default {
  removeSessionByID ({ dispatch }, { id }) {
    return Vue.$axios.delete('/auth/getMe').then((res) => {
      if (rootGetters['user/userId'] !== res.data.user_id) {
        // ???? WTF
        // Perform reset
        dispatch('auth/reset', null, { root: true })

        return false
      }

      // Cool!
      return true
    }).catch((err) => {
      Vue.$toasted.error(err)

      return false
    })
  }
}
