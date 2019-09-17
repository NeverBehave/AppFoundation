const Router = require('@koa/router')
const controller = require('./session.controller')
const router = new Router()

// // // //

router.get('/tokens', controller.listSessions)

// // // //

module.exports = router