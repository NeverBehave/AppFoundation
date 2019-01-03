exports.profile = function (ctx, next) {
    let user = ctx.state.user

    ctx.body = {
        email: user.email,
        username: user.username ? user.username : false
    }

    return next()
}
