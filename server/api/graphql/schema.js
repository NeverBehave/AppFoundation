const User = require('../user/user.graphql')
const Session = require('../session/session.graphql')
const {
    schemaComposer
} = require('graphql-compose')

schemaComposer.Query.addFields({
    ...User.Query,
    ...Session.Query
})

schemaComposer.Mutation.addFields({
    ...User.Mutation,
    ...Session.Mutation
})

const graphqlSchema = schemaComposer.buildSchema()

module.exports = graphqlSchema
