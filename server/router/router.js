const Router = require('koa-router')
const authorization = require('../api/middleware/authorization')

const router = new Router({
    prefix: '/api',
})
// // // //
router.use(authorization)

// Bootstrap API module routers
// Protected by Auth Middleware
const user = require('../api/user')
router.use('/user', user.routes(), user.allowedMethods())

const session = require('../api/session')
router.use('/session', session.routes(), session.allowedMethods())

// // // //

module.exports = router
