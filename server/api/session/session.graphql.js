const Session = require('./session.model')
const {
    composeWithMongoose
} = require('graphql-compose-mongoose')
const {
    adminAccess,
    adminOrIndividual
} = require('../graphql/mixins')


// STEP 2: CONVERT MONGOOSE MODEL TO GraphQL PIECES
const customizationOptions = {
    fields: {
        only: ['_id', 'user_agent', 'last_access', 'ip', 'expired', 'user_id']
    },
    resolvers: {
        findMany: {
            isRequire: true,
            requireFields: ['user_id'],
            sort: false,
            limit: false,
            skip: false
        }
    }
}
const SessionTC = composeWithMongoose(Session, customizationOptions)

// STEP 3: Add needed CRUD User operations to the GraphQL Schema
// via graphql-compose it will be much much easier, with less typing
const Query = {
    ...adminOrIndividual('user_id', {
        sessionsByUserId: SessionTC.getResolver('findMany'),
        sessionCount: SessionTC.getResolver('count'),
    }),
    ...adminAccess({
        sessionByIds: SessionTC.getResolver('findByIds'),
        sessionOne: SessionTC.getResolver('findOne'),
    })
    // userConnection: SessionTC.getResolver('connection'),
    // userPagination: SessionTC.getResolver('pagination'),
}

const Mutation = {
    ...adminOrIndividual('user_id', {
        sessionRemoveById: SessionTC.getResolver('removeById'),
    }),
    ...adminAccess({
        sessionCreateMany: SessionTC.getResolver('createMany'),
        sessionRemoveOne: SessionTC.getResolver('removeOne'),
        sessionRemoveMany: SessionTC.getResolver('removeMany'),
        sessionCreateOne: SessionTC.getResolver('createOne'),
        sessionUpdateOne: SessionTC.getResolver('updateOne'),
        sessionUpdateMany: SessionTC.getResolver('updateMany'),
    })
}

module.exports = {
    Query,
    Mutation
}
