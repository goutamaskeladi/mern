const router = require("express").Router()
const Task = require("../models/task.model")
const uuidv4 = require('uuid/v4')

router.get("/", (req, res) => {
    Task.find()
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500).json(error))
})

router.get('/:id', (req, res) => {
    Task.findById(req.param.id)
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500).json(error))
})

router.delete('/:id', (req, res) => {
    Task.findByIdAndDelete(req.params.id)
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500).json(error))
})

router.put('/update/:id', (req, res) => {
    Task.findById(req.params.id)
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
    const name = req.body.name
    const description = req.body.description
    const date = req.body.date

    const newData = new Task({
        _id: uuidv4(),
        name,
        description,
        date
    })

    newData.save()
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500).json(error))
})

module.exports = router
