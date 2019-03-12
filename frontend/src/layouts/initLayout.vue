<template>
  <b-container
    fluid
    class="main-container">
    <transition>
      <router-view/>
    </transition>
  </b-container>
</template>

<script>
export default {
  name: 'initLayout',
  mounted () {
    if (this.$store.getters['auth/token']) {
      this.$router.push({ name: 'DashBoard' })
    }
  }
}
</script>
