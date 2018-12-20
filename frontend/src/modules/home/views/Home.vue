<template>
  <b-jumbotron>
    <template slot="header">
      Business
    </template>
    <template slot="lead">
      Way to start your own business
    </template>
    <hr class="my-4">
    <p>
      Choose an action and get started!
    </p>
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
  </b-jumbotron>
</template>
