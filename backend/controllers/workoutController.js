const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// Get all workouts
const getAllWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 })

    res.status(200).json(workouts)
}
// Get one workout
const getOneWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Workout not found" })
    }

    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({ error: "Workout not found" })
    }

    res.status(200).json(workout)
}
// Post a workout
const postWorkout = async (req, res) => {
    const { title, reps, sets, weight } = req.body

    try {
        const workout = await Workout.create({ title, reps, sets, weight })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Workout not found" })
    }

    const workout = await Workout.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!workout) {
        return res.status(404).json({ error: "Workout not found" })
    }

    return res.status(200).json(workout)

}

// Delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Workout not found" })
    }

    const workout = await Workout.findOneAndDelete({ _id: id })

    if (!workout) {
        return res.status(404).json({ error: "Workout not found" })
    }

    return res.status(200).json(workout)
}

module.exports = {
    getAllWorkouts, getOneWorkout, postWorkout, deleteWorkout, updateWorkout
}