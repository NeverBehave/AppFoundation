
<template>
  <div id="normal" class="mb-5">
    <NavBar/>
    <b-container
      fluid
      class="main-container">
      <transition>
          <router-view/>
      </transition>
    </b-container>
  </div>
</template>

<style>
/* Extend parent elements */
#normal {
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'NormalLayout',
  components: {
    NavBar
  },
  mounted () {
    // Check the token and let's rock
    this.$store.dispatch('auth/validateUserState')
  }
}
</script>
