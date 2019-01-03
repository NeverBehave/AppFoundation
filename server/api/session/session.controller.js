const session = require('./session.model')

exports.listSessions = function (ctx, next) {
    let user = ctx.state.user
    
    return session.findTokenByUserId(user._id).then((tokens) => {
        ctx.body = tokens
        return next()
    })
}
