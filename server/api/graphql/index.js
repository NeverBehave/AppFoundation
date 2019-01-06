const Koa = require('koa')
const {
    ApolloServer
} = require('apollo-server-koa')
const schema = require('./schema')

const server = new ApolloServer({
    schema,
    playground: process.env.NODE_ENV !== 'production',
    context: ({
        ctx
    }) => ({
        // Return only user for now. In case some how accidently modify `ctx`
        user: ctx.state.user
    })
})

const app = new Koa()


// Protect with Auth
app.use(require('../middleware/authorization'))
server.applyMiddleware({
    app: app, 
    path: '/'
})
// // // //

// // // //

module.exports = app
