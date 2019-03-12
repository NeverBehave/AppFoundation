<template>
    <b-card>
      <h4 slot="header">User Profile</h4>
        <p class="card-text">
            Here are some information we have on record.
        </p>
      <b-list-group>

      <ApolloQuery
        :query="require('../graphql/userById.gql')"
        :variables="{ id: $store.getters['auth/userId'] }"
      >
        <!-- 结果将自动更新 -->
        <template slot-scope="{ result: { loading, error, data } }">
              <!-- Loading -->
          <b-list-group-item v-if="loading">Loading...</b-list-group-item>

          <!-- Result -->
          <template v-else-if="data" flush>
            <b-list-group-item>Email: {{ data.userById.email }}</b-list-group-item>
            <b-list-group-item>Username: {{ data.userById.username }}</b-list-group-item>
          </template>

          <!-- No result -->
          <b-list-group-item v-else-if="error">An error occured</b-list-group-item>
          <b-list-group-item v-else>No result :(</b-list-group-item>
        </template>
      </ApolloQuery>
      </b-list-group>
    </b-card>
</template>

<script>
export default {
  name: 'UserCard',
}
</script>
