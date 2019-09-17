const mount = require('koa-mount')
const Koa = require('koa');
// // // //

const app = new Koa()

// Bootstrap API module routers
// !!Router here will not be protected by Auth Middleware
const auth = require('../api/auth')
const index = require('../api/index')
app.use(mount('/auth', auth))
app.use(mount('/', index))

// Protected Area
app.use(require('../api/middleware/authorization'))
app.use(mount('/user', require('../api/user')))
app.use(mount('/session', require('../api/session')))
// // // //

module.exports = app
