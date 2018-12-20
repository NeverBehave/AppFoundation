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

const packageAttributes = {
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'item',
        require: true
    },
    number: {
        type: Number,
        default: 0
    }
}

// // // //

const Package = new Schema(packageAttributes, collection_options);

// // // //

// Create new User document
// TODO - add email

// TODO - absract schema.class_name
module.exports = mongoose.model('Package', Package)
