<template>
<div>
    <b-card no-body
            :img-src="avatar"
            img-alt="Image"
            img-top>
        <h4 slot="header">User Profile</h4>
        <b-card-body>
            <p class="card-text">
                Here are some information we have on record.
            </p>
        </b-card-body>
        <b-list-group flush>
            <b-list-group-item>Email: {{email}}</b-list-group-item>
            <b-list-group-item>Username: {{username}}</b-list-group-item>
            <b-list-group-item>Refer by: {{referBy}}</b-list-group-item>
            <b-list-group-item>Balance: {{balance}}</b-list-group-item>
        </b-list-group>
        <b-card-body>
            <!-- <a href="#"
               class="card-link">Card link</a>
            <a href="#"
               class="card-link">Another link</a> -->
               <p>--End of Card--</p>
        </b-card-body>
        <!-- <b-card-footer>This is a footer</b-card-footer>
        <b-card-img src="https://placekitten.com/480/210"
                    alt="Image"
                    bottom></b-card-img> -->
    </b-card>
</div>
</template>


<script>
import { mapState, mapGetters } from 'vuex'

// email: 'indexyz@protonmail.com',
// username: 'Indexyz',
// referBy: 'null',
// balance: 0,
export default {
  name: 'Profile',
  computed: {
    ...mapState('user', [
      'email', 'username', 'referBy', 'balance'
    ]),
    ...mapGetters('user', [
      'avatar'
    ])
  }
}
</script>
