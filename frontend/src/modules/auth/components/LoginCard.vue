<template>
  <b-card title="Login"
          sub-title="So close to the dashboard..."
          footer-tag="footer">
          <b-form>
            <b-form-group id="EmailGroup"
              label="Email"
              label-for="EmailInput"
               :invalid-feedback="invalidResponse('email')"
            >
            <b-form-input
              id="EmailInput"
              type="text"
              v-model="email"
              v-validate="'required|email'"
              :state="validateState('email')"
              name="email">
            </b-form-input>
             </b-form-group>
              <b-form-group id="PasswordGroup"
                label="Password"
                label-for="PasswordInput"
                :invalid-feedback="invalidResponse('password')"
              >
              <b-form-input
                id="PasswordInput"
                type="password"
                v-model="password"
                v-validate="'required|min:6'"
                :state="validateState('password')"
                name="password">
              </b-form-input>
             </b-form-group>
          </b-form>
          <b-btn slot="footer" variant="primary" @click="submit" :disabled="disableSubmit">Login</b-btn>
      </b-card>
</template>

<script>
import Form from '@/mixins/form'

export default {
  name: 'LoginCard',
  mixins: [Form],
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    submit () {
      this.submitting = true
      this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password
      }).then((success) => {
        if (!success) this.submitting = false
      })
    }
  }
}
</script>
