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

const typeAttributes = {
    name: {
        type: String,
        required: true
    }
}

// // // //

const Type = new Schema(typeAttributes, collection_options);

// // // //

// Create new User document
// TODO - add email

// TODO - absract schema.class_name
module.exports = mongoose.model('Type', Type)
