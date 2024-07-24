const express = require('express')
const router = express.Router()
const {
    getAllWorkouts,
    getOneWorkout,
    postWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

router.get('/', getAllWorkouts)

router.get('/:id', getOneWorkout)

router.post('/', postWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)

module.exports = router