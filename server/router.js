const Router = require('koa-router');

// // // //
const router = new Router({
        prefix: '/api',
})

// Bootstrap API module routers
router.use('/auth', require('./api/auth').routes())
router.use('/data', require('./api/data').routes())
// // // //

module.exports = router
