const passport = require('koa-passport')
const CustomStrategy = require('passport-custom').Strategy
const Session = require('../../session/session.model')


passport.use('api-local' , new CustomStrategy(
    function (ctx, done) {
        let token = ctx.header['token']
        if (!token) {
            return done(null, false, {
                message: 'Missing Credential.'
            });
        }

        return Session.findOneByToken(token).then(
            (session) => {
                if (!session) {
                    return done(null, false, {
                        message: 'Session Expired.'
                    })
                }

                // Record the last access time
                session.last_access = new Date() * 1

                // No need to wait for database write in
                session.save()

                return done(null, session.user)
            }
        )
    }
));
