<template>
    <b-card>
      <h4 slot="header">Login Session</h4>
        <p class="card-text">
            Here are Active Login Session.
        </p>
      <b-list-group>
     <ApolloQuery
        :query="require('../graphql/sessionsByUserId.gql')"
        :variables="{ id: $store.getters['auth/userId'] }"
      >
        <!-- 结果将自动更新 -->
        <template slot-scope="{ result: { loading, error, data } }">
              <!-- Loading -->
          <b-list-group-item v-if="loading">Loading...</b-list-group-item>

          <!-- Result -->
          <template v-else-if="data" flush>
            <b-list-group-item
              v-for="d in data.sessionsByUserId"
              v-bind:key="d._id"
              v-b-popover.hover="{title: 'User-Agent',
                                  content: d.user_agent,
                                  delay: { show: 1000, hide: 0 }}">
               IP: {{ d.ip }} | Last Access: {{ $day(d.last_access).format('YYYY-MM-DD HH:mm:ss A') }}
              <ApolloMutation
                  :mutation="require('../graphql/sessionRemoveOne.gql')"
                  :variables="{
                    id: d._id
                  }"
                >
                  <template slot-scope="{ mutate, loading, error }">
                    <b-btn
                      class="btn-outline-danger"
                      variant="danger"
                      @click="mutate()"
                      :disabled="loading">
                      <font-awesome-icon icon="times" />
                    </b-btn>
                    <p v-if="error">An error occured: {{ error }}</p>
                  </template>
                </ApolloMutation>
            </b-list-group-item>
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
  name: 'Session',
}
</script>
