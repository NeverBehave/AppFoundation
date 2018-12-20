const mongoose = require('mongoose')
const Schema = mongoose.Schema

// // // //

const collection_options = {
    timestamps: {
        createdAt: 'createdOn',
        updatedAt: 'updatedOn'
    },
    versionKey: false
}

const transactionAttributes = {
    from_user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'from_user_id'
    },
    to_user_id: {
        type: Schema.Types.ObjectId,
        ref: 'to_user_id'
    },
    packages: []
}

// // // //

const Type = new Schema(typeAttributes, collection_options);

// // // //

// Create new User document
// TODO - add email

// TODO - absract schema.class_name
module.exports = mongoose.model('Type', Type)
