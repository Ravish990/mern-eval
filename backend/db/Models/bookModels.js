const mongoose = require('mongoose');

const bookModel = mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    author : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    pages : {
        type : Number,
        required: true
    },
    genre : {
        type :String, 
        require: true
    },

    year : {
        type : Number,
        required: true
    },

    createdAt : {
          type : Date,
          data : Date.now(),

    }
})

module.exports = mongoose.model("Book", bookModel)