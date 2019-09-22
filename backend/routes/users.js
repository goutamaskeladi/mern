const router = require("express").Router()
const User = require('../models/user.model')
const uuidv4 = require('uuid/v4')

router.get('/', (req, res) => {
    User.find()
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500).json(error))
})

router.post('/add', (req, res) => {
    const newUser = new User({
      _id: uuidv4(),
      name: req.body.name
    })
    newUser.save()
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500).json(error))
})

module.exports = router
