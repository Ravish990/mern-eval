const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
    },
    type: {
        type: Number,
        default: 0,
        enum: [0,1]
    },
    createdAt : {
        type : Date,
        Date : Date.now()
    }
})

module.exports = mongoose.model("Users", userModel);