const router = require('express').Router();
const Workout = require('../models/workout.js');



// Get Workouts


router.get('/api/workouts', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: '$exercises.duration' }
            }
        }
    ])
        .limit(7)
        .then(data => {
            res.json(data);
        }).catch(err => {
            res.status(400).json(err)
        })

});

// Create Workouts
router.post('/api/workouts', ({ body }, res) => {
    console.log(body)
    Workout.create(body)
        .then(data => {
            res.json(data)
        }).catch(err => {
            res.status(400).json(err)
        })

});

// update a workout

router.put('/api/workouts/:id', (req, res) => {
    console.log(req.body)
    Workout.findByIdAndUpdate(req.params.id,
        { $push: { exercises: req.body } },
        { new: true, runValidators: true })
        .then(data => {
            res.json(data)
        }).catch(err => {
            res.status(400).json(err)
        })
});


router.get('/api/workouts/range', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: '$exercises.duration' },
                totalWeight: { $sum: '$exercises.weight' }
            }
        }
    ])
        .limit(7)
        .then(data => {
            res.json(data);
        }).catch(err => {
            res.status(400).json(err)
        })

});

module.exports = router;