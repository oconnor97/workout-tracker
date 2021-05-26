const router = require('express').Router();
const Workout = require('../models/workout.js');

// const db = require('../models')

// Get Workouts
// router.get('/api/workouts', (req, res) => {
//     Workout.find({}).then(data => {
//         res.json(data);
//     }).catch(err => {
//         res.status(400).json(err)
//     })
// });


router.get('/api/workouts', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: '$exercises.duration' }
            }
        }
    ])
        .then(data => {
            res.json(data);
        }).catch(err => {
            res.status(400).json(err)
        })

});

// Create Workouts
router.post('/api/workouts', ({ body }, res) => {
    Workout.create(body)
        .then(data => {
            res.json(data)
        }).catch(err => {
            res.status(400).json(err)
        })

});

// update a workout

router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(req.params.id,
        { $push: { exercises: req.body } })
        .then(data => {
            res.json(data)
        }).catch(err => {
            res.status(400).json(err)
        })
});

module.exports = router;