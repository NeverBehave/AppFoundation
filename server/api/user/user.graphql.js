const User = require('./user.model')
const {
    composeWithMongoose
} = require('graphql-compose-mongoose')
const {
    adminAccess, adminOrIndividual
} = require('../graphql/mixins')


// STEP 2: CONVERT MONGOOSE MODEL TO GraphQL PIECES
const customizationOptions = {
    fields: {
        only: ['_id', 'email', 'username', 'admin']
    }
}
const UserTC = composeWithMongoose(User, customizationOptions)

// STEP 3: Add needed CRUD User operations to the GraphQL Schema
// via graphql-compose it will be much much easier, with less typing
const Query = {
     ...adminOrIndividual({
         userById: UserTC.getResolver('findById')
     }),
     ...adminAccess({
         userByIds: UserTC.getResolver('findByIds'),
         userOne: UserTC.getResolver('findOne'),
         userMany: UserTC.getResolver('findMany'),
         userCount: UserTC.getResolver('count'),
     })
    // userConnection: UserTC.getResolver('connection'),
    // userPagination: UserTC.getResolver('pagination'),
}

const Mutation = {
    ...adminOrIndividual({
        userUpdateById: UserTC.getResolver('updateById'),
        userRemoveById: UserTC.getResolver('removeById'),
    }),
    ...adminAccess({
        userCreateMany: UserTC.getResolver('createMany'), 
        userRemoveOne: UserTC.getResolver('removeOne'),
        userRemoveMany: UserTC.getResolver('removeMany'),
        userCreateOne: UserTC.getResolver('createOne'),
        userUpdateOne: UserTC.getResolver('updateOne'),
        userUpdateMany: UserTC.getResolver('updateMany'),
    })
}

module.exports = {
    Query, Mutation
}


