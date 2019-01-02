
const passport = require('koa-passport')
const User = require('../../user/user.model')

passport.serializeUser(function (user, done) {
    done(null, user._id)
})

passport.deserializeUser(async function (id, done) {
    try {
        const user = User.findById(id).exec()
        done(null, user)
    } catch (err) {
        done(err)
    }
})

require('./local')
