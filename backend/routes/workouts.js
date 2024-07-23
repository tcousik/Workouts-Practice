const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({ msg: "Get all workouts" })
})

router.get('/:id', (req, res) => {
    res.json({ msg: "Get one workout" })
})

router.post('/', (req, res) => {
    res.json({ msg: "Post a workout" })
})

router.delete('/:id', (req, res) => {
    res.json({ msg: "Delete a workout" })
})

router.patch('/', (req, res) => {
    res.json({ msg: "Edit a workout" })
})

module.exports = router