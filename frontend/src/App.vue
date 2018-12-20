<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style>
/* Extend parent elements */
html,
body,
#app {
  margin: 0;
  height: 100%;
  width: 100%;
}

body {
  background-image: url("https://www.rpi.edu/dept/cct/apps/web-branding/v1/footer/footer-background.jpg");
  /*background-repeat: no-repeat; /* Do not repeat the image disabled for now, for mobile device. */
  background-size: cover;
}

/* The nav is position:fixed */
.main-container {
  padding-top: 100px;
  min-height: 100%;
  height: 100%;
}
</style>
