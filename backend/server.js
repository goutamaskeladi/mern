const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const practiceRouter = require('./routes/practice')
const usersRouter = require('./routes/users')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())

const dbURL = process.env.MONGO_CLOUD;
mongoose.connect(dbURL, {useNewUrlParser:true, useCreateIndex:true} )
mongoose.connection.on('connected', () => {
    console.log("Mongoose default connection is open to ", dbURL);
})
mongoose.connection.on('error', err => {
    console.log("Mongoose default connection has occured "+err+" error");
})
mongoose.connection.on('disconnected', () => {
    console.log("Mongoose default connection is disconnected");
})

app.use('/practice', practiceRouter)
app.use('/users', usersRouter)

app.listen(port, () => console.log(`Server is running on port ${port}`))
