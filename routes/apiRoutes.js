const router = require('express').Router();
const { Workout } = require('../models');
// const Workout = require('../models/workout.js');
// const db = require('../models')

// Get Workouts


router.get('/api/workouts', (req, res) => {
    Workout.find({}).then(workoutDB => {
        res.json(workoutDB);
    }).catch(err => {
        res.json(err)
    })
});

// Create Workouts

router.post('/api/workouts', ({ body }, res) => {
    Workout.create(body)
        .then(workoutDB => {
            res.json(workoutDB)
        }).catch(err => {
            res.json(err)
        })

});

module.exports = router;