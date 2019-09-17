const Router = require('@koa/router')
const controller = require('./user.controller')
const router = new Router()

// // // //

router.get('/profile', controller.profile)

// // // //

module.exports = router
