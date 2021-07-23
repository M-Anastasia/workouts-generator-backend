const mongoose = require("mongoose");

const Exercise = mongoose.model(
    "Exercise",
    new mongoose.Schema({
        name: String,
        description: {
            type: String,
            default: ""
        },
        muscle: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Muscle"
        }
    })
);

module.exports = Exercise;