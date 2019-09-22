const mongoose = require("mongoose")

const Schema = mongoose.Schema

const taskSchema = new Schema({
    _id : { type: String, required: true },
    name : { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true }
})

const Task = mongoose.model("Task", taskSchema)

module.exports = Task
