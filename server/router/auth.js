const Router = require('koa-router')

const router = new Router({
    prefix: '/api',
})
// // // //

// Bootstrap API module routers
// !!Router here will not be protected by Auth Middleware
const auth = require('../api/auth')
router.use('/auth', auth.routes(), auth.allowedMethods())

//router.use(authorization)
// // // //

module.exports = router
