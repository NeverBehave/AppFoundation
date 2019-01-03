export default {
  setUserData (state, user) {
    for (var k in state) {
      state[k] = user[k]
    }
  }
}
