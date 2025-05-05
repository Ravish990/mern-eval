const mongoose = require('mongoose');

require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI

connectDb = () => { mongoose.connect(MONGO_URI).then(() => {
    console.log("Mongodb Is connected")
})
};


module.exports = connectDb;
