<template>
  <b-row class="justify-content-md-center">
    <b-col>
      <b-card title="Login"
              sub-title="So close to the dashboard...">
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
          </b-form>
           <b-button-group>
            <b-button>Login</b-button>
            <b-btn :to="{'name': 'Register'}">Want to Register?</b-btn>
            <b-btn :to="{'name': 'ResetPassword'}">Forget Password?</b-btn>
          </b-button-group>
      </b-card>
    </b-col>
  </b-row>
</template>


<script>
import Form from '@/mixins/form'

export default {
  mixins: [Form],
  data() {
    return {
      email: null
    }
  },
  methods: {
  }
}
</script>
