const Router = require('koa-router')
//const authorization = require('../middleware/authorization')

const router = new Router({
    prefix: '/api',
})
// // // //

// Bootstrap API module routers
const auth = require('./api/auth')
router.use('/auth', auth.routes(), auth.allowedMethods())
// // // //

module.exports = router
