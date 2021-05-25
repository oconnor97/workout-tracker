const router = require('express').Router();
// const Workout = require('../models/workout.js');
const db = require('../models')

// Get Workouts


router.get('/api/workouts', (req, res) => {
    db.Workout.find({}).then(workoutDB => {
        res.json(workoutDB);
    }).catch(err => {
        res.json(err.message)
    })
});