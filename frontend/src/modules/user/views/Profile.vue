<template>
<div>
  <user-card class="mb-4"/>
  <session-card/>
</div>
</template>

<script>
import UserCard from '../components/UserCard'
import SessionCard from '../components/SessionCard'

export default {
  name: 'Profile',
  components:{
    UserCard,
    SessionCard
  },
  computed: {
    userId () {
      return this.$store.getters['auth/userId']
    }
  }
}
</script>
