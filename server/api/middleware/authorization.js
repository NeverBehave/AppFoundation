// // // //
const passport = require('koa-passport')
require('../auth/passport')

// Authorization middleware - rejects requests
// with missing, invalid, or expired tokens.
module.exports = function (ctx, next) {
    return passport.authenticate('api-local', {
        session: false
    },(err, user, info) => {
        if (err) {
            console.log(err)
            ctx.status = 503
            ctx.body = {
                success: false
            }
            return
        }

        if (!user) {
            ctx.status = 401
            ctx.body = {
                success: false,
                ...info
            }
            return
        }

        return ctx.login(user).then(() => {
            return next()
        })
    })(ctx, next)
}
