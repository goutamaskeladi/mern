const mongoose = require("mongoose")

const Schema = mongoose.Schema

const practiceSchema = new Schema({
    _id : { type: String, required: true },
    username : { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true }
})

const Practice = mongoose.model("Practice", practiceSchema)

module.exports = Practice