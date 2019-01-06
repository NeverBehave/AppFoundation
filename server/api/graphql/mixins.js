module.exports = {
    adminAccess: function (resolvers) {
        Object.keys(resolvers).forEach((k) => {
            resolvers[k] = resolvers[k].wrapResolve(next => rp => {
                let user = rp.context.user

                rp.beforeRecordMutate = function (doc, rp) {
                    if (user.isAdmin()) {
                        return next(rp)
                    }

                    throw new Error('Only Admin is allowed to perform this task')
                }

                if (user.isAdmin()) {
                    return next(rp)
                }

                return null
            })
        })
        return resolvers
    },

    adminOrIndividual: function () {
        let field = '_id'
        let resolvers

        if (arguments.length === 1) {
            resolvers = arguments[0]
        }

        if (arguments.length === 2) {
            field = arguments[0]
            resolvers = arguments[1]
        }

        Object.keys(resolvers).forEach((k) => {
            resolvers[k] = resolvers[k].wrapResolve(next => async rp => {
                // if user and _id = user._id ==> ok
                // if admin == > ok
                // else == > deny
                let user = rp.context.user

                rp.beforeRecordMutate = async function (doc, rp) {

                    console.log(doc)
                    if (user.isAdmin()) {
                        return next(rp)
                    }

                    if (doc && user._id.toString() !== doc[field]) {
                        throw new Error('User is not allowed to mutate this data!')
                    }
                }

                if (user.isAdmin()) {
                    return next(rp)
                }

                // Only access to your own profile
                if (rp.args.filter) {
                    if (rp.args.filter[field] === user._id.toString()) {
                        return next(rp)
                    } 
                } else {
                    if (rp.args[field] === user._id.toString()) {
                        return next(rp)
                    }
                }
                 
                throw new Error('User is not allow to acces the data')
            })
        })

        return resolvers
    }

}
