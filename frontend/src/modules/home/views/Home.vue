<template>
  <b-jumbotron>
    <template slot="header">
      {{ appName }}
    </template>
    <template slot="lead">
      Way to start your own app
    </template>
    <hr class="my-4">
    <p>
      Choose an action and get started!
    </p>
    <b-button-group>
    <b-btn
      :to="{'name': 'Login'}"
      variant="primary">Login</b-btn>
    <b-btn
      :to="{'name': 'Register'}"
      variant="success">Register</b-btn>
    <b-btn
      variant="dark"
      href="#">About this Project</b-btn>
    <b-btn
      variant="link"
      href="https://github.com/hfiprogramming">About us</b-btn>
    </b-button-group>
  </b-jumbotron>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    appName () {
      return this.$store.getters['home/name']
    }
  }
}
</script>
