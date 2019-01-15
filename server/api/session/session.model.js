const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UIDGenerator = require('uid-generator');
const uidgen = new UIDGenerator(); // Default is a 128-bit UID encoded in base58

const sessionAttributes = {
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    token: {
        type: String,
        required: true,
        unique: true
    },
    user_agent: {
        type: String,
        default: null,
    },
    last_access: {
        type: Number,
        default: null
    },
    ip: {
        type: String,
        required: true
    },
    expired: {
        type: Boolean,
        default: false,
    }
}

const Session = new Schema(sessionAttributes)

// Specifying a virtual with a `ref` property is how you enable virtual population
Session.virtual('user', {
    ref: 'User',
    localField: 'user_id',
    foreignField: '_id',
    justOne: true // Only return one User
})

Session.statics.findOneByToken = function (token) {
    return this.findOne({
        token
    }).populate('user').exec()
}

Session.statics.findTokenByUserId = function (user_id) {
    return this.find({
        user_id
    }).exec()
}

Session.statics.create = async function (
    user, user_agent, ip
) {
    let token = await uidgen.generate() // -> 'B1q2hUEKmeVp9zWepx9cnp',
    // Instantiates new Session model
    const session = new this({
        user_id: user._id,
        user_agent: user_agent,
        ip: ip,
        token: token
    })

    // Return User.save() Promise
    return session.save()
}



module.exports = mongoose.model('Session', Session)
