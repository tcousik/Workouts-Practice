const express = require('express')
const router = express.Router()
const Workout = require('../models/workoutModel')

router.get('/', (req, res) => {
    res.json({ msg: "Get all workouts" })
})

router.get('/:id', (req, res) => {
    res.json({ msg: "Get one workout" })
})

router.post('/', async (req, res) => {
    const { title, reps, sets, weight } = req.body

    try {
        const workout = await Workout.create({ title, reps, sets, weight })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.delete('/:id', (req, res) => {
    res.json({ msg: "Delete a workout" })
})

router.patch('/', (req, res) => {
    res.json({ msg: "Edit a workout" })
})

module.exports = router