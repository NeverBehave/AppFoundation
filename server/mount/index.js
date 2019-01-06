const mount = require('koa-mount')
const Koa = require('koa');
// // // //

const app = new Koa()

// Bootstrap API module routers
// !!Router here will not be protected by Auth Middleware
const auth = require('../api/auth')
app.use(mount('/auth', auth))

const graphql = require('../api/graphql')
app.use(mount('/data', graphql))
//router.use(authorization)
// // // //

module.exports = app
