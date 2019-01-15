<template>
<div>
    <b-card no-body>
        <h4 slot="header">User Profile</h4>
        <b-card-body>
            <p class="card-text">
                Here are some information we have on record.
            </p>
        </b-card-body>
        <ApolloQuery
          :query="require('../graphql/userById.gql')"
          :variables="{ id: $store.getters['auth/userId'] }"
        >
        <template slot-scope="{ result: { loading, error, data } }">
          <!-- Loading -->
          <div v-if="loading" class="loading apollo">Loading...</div>

          <!-- Error -->
          <div v-else-if="error" class="error apollo">{{ error }}</div>

          <!-- Result -->
          <b-list-group v-else-if="data" flush>
            <b-list-group-item>Email: {{ data.userById.email }}</b-list-group-item>
            <b-list-group-item>Username: {{ data.userById.username }}</b-list-group-item>
          </b-list-group>

          <!-- No result -->
          <div v-else class="no-result apollo">No result :(</div>
        </template>
        </ApolloQuery>
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
// email: 'indexyz@protonmail.com',
// username: 'Indexyz',
// referBy: 'null',
// balance: 0,
export default {
  name: 'Profile',
  computed: {
    userId () {
      return this.$store.getters['auth/userId']
    }
  }
}
</script>
