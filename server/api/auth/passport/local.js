const passport = require('koa-passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../../user/user.model')


passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        session: false
    }, 
    function (email, password, done) {
        return User.findOneByEmail(email)
        .then((user) => {
            if (!user) {
                return done(null, false, {
                    message: 'Incorrect email.'
                });
            }
            if (!user.verify(password)) {
                return done(null, false, {
                    message: 'Incorrect password.'
                });
            }
            return done(null, user);
        })
    })
)
