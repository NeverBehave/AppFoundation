const md5 = require('crypto-js/md5')

export default {
  avatar: (state) => {
    return 'https://www.gravatar.com/avatar/' + md5(state.email)
  },
  username: (state) => {
    return state.username
  }
}
