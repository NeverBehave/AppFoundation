
export default {
  methods: {
    validateState (ref) {
      if (this.veeFields[ref] && (this.veeFields[ref].dirty || this.veeFields[ref].validated)) {
        return !this.errors.has(ref)
      }
      return null
    },
    invalidResponse (ref) {
      return this.errors.first(ref)
    }
  }
}
