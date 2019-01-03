
const passport = require('koa-passport')
const User = require('../../user/user.model')

passport.serializeUser(function (user, done) {
    done(null, user._id)
})

passport.deserializeUser(function (id, done) {
    return User.findById(id).exec().then(user => {
        return done(null, user)
    })
})

require('./local')
require('./api')
