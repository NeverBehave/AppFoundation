const Router = require('@koa/router')
const controller = require('./auth.controller')

const router = new Router()

// // // //

// POST /register
router.get('/login', (ctx) => {
    ctx.body = {
        email: 'admin@admin.com',
        password: 'tempassword'
    }
})
router.post('/register', controller.register)

// POST /login
router.post('/login', controller.login)

router.get('/getMe', controller.getMe)

// POST /reset_password
router.post('/reset_password', controller.reset_password)

// // // //

module.exports = router
