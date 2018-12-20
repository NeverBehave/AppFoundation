const Router = require('koa-router')
const controller = require('./auth.controller')
const authorization = require('../middleware/authorization')

const router = new Router()

// // // //

// POST /register
router.post('/register', controller.register)

// POST /login
router.post('/login', controller.login)

// POST /reset_password
router.post('/reset_password', authorization, controller.reset_password)

// // // //

module.exports = router
