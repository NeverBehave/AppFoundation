<template>
  <b-card title="Logout"
        sub-title="So close to Login...">
    <p class="card-text">
      You have logged out. See you later.
    </p>
      <b-button-group>
      <b-btn :to="{'name': 'Login'}">Login</b-btn>
    </b-button-group>
  </b-card>
</template>
