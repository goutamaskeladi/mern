const router = require("express").Router()
const Practice = require("../models/practice.model")

router.get("/", (req, res) => {
    Practice.find()
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500).json(error))
})

router.post("/add", (req, res) => {
    const username = req.body.username
    const description = req.body.description
    const duration = Number(req.body.duration)
    const date = Date.parse(req.body.date)

    const newData = new Practice({
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