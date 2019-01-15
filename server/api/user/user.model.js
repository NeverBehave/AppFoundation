const mongoose = require('mongoose')
const Schema = mongoose.Schema
const crypto = require('crypto')

// // // //

// Password encryption helper function
function encryptPassword(password) {
    return crypto.createHmac('sha1', process.env.PASSWORD_ENCRYPTION_SECRET)
        .update(password)
        .digest('base64')
}

const collection_options = {
    timestamps: {
         createdAt: 'createdOn',
         updatedAt: 'updatedOn'
    },
    versionKey: false
}

const userAttributes = {
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: false,
    },
}

// // // //

const User = new Schema(userAttributes, collection_options);

// // // //

// Create new User document
User.statics.create = function ({
    email,
    password
}) {

    // Instantiates new User model
    const user = new this({
        email,
        password: encryptPassword(password)
    })

    // Return User.save() Promise
    return user.save()
}

// findOneByEmail
// Find one User by email
User.statics.findOneByEmail = function (email) {
    // Executes MongoDb query
    return this.findOne({
        email
    }).exec()
}

// findPme

// verify
// Verifies the password parameter of POST /auth/login requests
User.methods.verify = function (password) {
    // Verifies saved password against a request's password
    return this.password === encryptPassword(password)
}

// assignAdmin
// Assigns admin priviledges to a user
User.methods.assignAdmin = function () {
    // Assigns true to `admin` attribute
    this.admin = true

    // Returns `save` Promise
    return this.save()
}

User.methods.isAdmin = function () {
    return this.admin === true
}

// TODO - absract schema.class_name
module.exports = mongoose.model('User', User)
