const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Type is required"

            },

            name: {
                type: String,
                trim: true,
                required: "Name is required"
            },

            duration: {
                type: Number,
                required: "Duration is required"
            },

            weight: {
                type: Number,
            },

            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            }


        }
    ],

});

// workoutSchema.methods.totalDuration = () => {
//     console.log('hi')
// }



const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
