const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
    _id : { type: String, required: true },
    name : {
        type: String,
        required: true,
        unique: true,
        minlength: 5
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User
