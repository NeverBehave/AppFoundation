const User = require('../user/user.model')
const Session = require('../session/session.model')
const passport = require('koa-passport')
require('./passport')

// // // //

// POST /api/auth/register
// { email, password }
exports.register = (ctx, next) => {

    // Pulls parameters from req.body
    const {
        password,
        email
    } = req.body

    // Create a new User instance if one does not exist
    const create = (user) => {
        // User exists - throw error and return
        if (user) {
            throw new Error('email exists')
            return
        }

        // Creates a new User
        return User.create({
            email,
            password
        })
    }

    // Respond to the client
    const respond = (user) => {
        res.json({
            message: 'Registered Successfully.'
        })
    }

    // Handle error (email exists)
    const onError = (error) => {
        res.status(409).json({
            message: error.message
        })
    }

    // check username duplication
    User.findOneByEmail(email)
        .then(create)
        .then(respond)
        .catch(onError)
}

// // // //

// POST /api/auth/login
// { username, password }
exports.login = (ctx, next) => {
    return passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.log(err)
            ctx.status = 503
            ctx.body = {
                success: false
            }
            return next()
        }

        if (!user) {
            ctx.status = 401
            ctx.body = {
                success: false,
                ...info
            }
            return next()
        }

        // Generate Token for user
        Session.create(user, ctx.request.header['user-agent'], ctx.request.ip).then((session) => {
            console.log('generating token for user')
            ctx.status = 200
            ctx.body = {
                success: true,
                token: session.token
            }
            return next()
        })
       
    })(ctx, next);
}

// // // //

// POST /api/auth/reset_password
exports.reset_password = (req, res) => {
    console.log('TODO - reset password logic')
    // Password reset workflow (option A):
    // 1 - Fetch User -> User.findByUsername(req.user.username)
    // 2 - Generate RandomPassword
    // 3 - Email RandomPassword to User.email
    // 4 - Assign User.password = RandomPassword
}
