const router = require("express").Router()
const Practice = require("../models/practice.model")
const uuidv4 = require('uuid/v4')

router.get("/", (req, res) => {
    Practice.find()
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500).json(error))
})

router.get('/:id', (req, res) => {
    Practice.findById(req.param.id)
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500).json(error))
})

router.delete('/:id', (req, res) => {
    Practice.findByIdAndDelete(req.params.id)
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500).json(error))
})

router.put('/update/:id', (req, res) => {
    Practice.findById(req.params.id)
    .then(result => {
        result.username = req.body.username
        result.description = req.body.description
        result.duration = Number(req.body.duration)
        result.date = Date.parse(req.body.date)

        result.save()
        .then(response => res.status(200).json(response))
        .catch(error => res.status(500).json(error))
    })
    .catch(error => res.status(500).json(error))
})

router.post("/add", (req, res) => {
    const username = req.body.username
    const description = req.body.description
    const duration = Number(req.body.duration)
    const date = Date.parse(req.body.date)

    const newData = new Practice({
        _id: uuidv4(),
        username,
        description,
        duration,
        date
    })

    newData.save()
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500).json(error))  
})

module.exports = router