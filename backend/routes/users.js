const router = require("express").Router()
const User = require('../models/user.model')

router.get('/', (req, res) => {
    User.find()
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500).send(error))
})

router.post('/add', (req, res) => {
    const username = req.body.username
    const newUser = new User({username})
    newUser.save()
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500).json(error))
})

module.exports = router