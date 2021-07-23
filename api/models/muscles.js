const mongoose = require("mongoose");

const Muscle = mongoose.model(
    "Muscle",
    new mongoose.Schema({
        name: String
    })
);

module.exports = Muscle;