const mongoose = require("mongoose");
// const { Workout } = require(".");
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
                required: "Weight is required"
            },

            reps: {
                type: Number,
                required: "Reps is required"
            },
            sets: {
                type: Number,
                required: "Sets are required"
            }


        }
    ],

});

workoutSchema.methods.totalDuration = () => {
    console.log('hi')
}



const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
