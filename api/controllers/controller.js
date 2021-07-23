const mongoose = require('mongoose');
const muscle = require('../models/muscles');
const exercise = require('../models/exercises');

exports.listMuscles = (req, res) => {
    muscle.find({}, (err, muscle) => {
        if (err)
            res.send(err);
        res.json(muscle);
    });
}

exports.listExercises = (req, res) => {
    exercise.find({}, (err, exercise) => {
        if (err)
            res.send(err);
        res.json(exercise);
    });
}

exports.getRandomExercise = (req, res) => {
    exercise.countDocuments().exec((err, count) => {
        const random = Math.floor(Math.random() * count);
        exercise.findOne().skip(random).exec((err, exercise) => {
            if (err)
                res.send(err);
            res.json(exercise);
        })
    })
}

exports.getRandomExerciseByMuscle = (req, res) => {
    exercise.find({muscle: req.params.muscleId}, (err, result) => {
        res.json(result[Math.floor(Math.random() * result.length)]);
    })
}

exports.createMuscle = (req, res) => {
    const new_muscle = new muscle(req.body);
    new_muscle.save((err, muscle) => {
        if (err)
            res.send(err);
        res.json(muscle);
    });
};

exports.createExercise = (req, res) => {
    const new_exercise = new exercise(req.body);
    new_exercise.save((err, exercise) => {
        if (err)
            res.send(err);
        res.json(exercise);
    });
};

exports.readMuscle = (req, res) => {
    muscle.findById(req.params.muscleId, (err, muscle) => {
        if (err)
            res.send(err);
        res.json(muscle);
    });
};

exports.readExercise = (req, res) => {
    exercise.findById(req.params.exerciseId, (err, exercise) => {
        if (err)
            res.send(err);
        res.json(exercise);
    });
};

exports.updateMuscle = (req, res) => {
    muscle.findOneAndUpdate({_id: req.params.muscleId}, req.body, {new: true}, (err, muscle) => {
        if (err)
            res.send(err);
        res.json(muscle);
    });
};

exports.updateExercise = (req, res) => {
    exercise.findOneAndUpdate({_id: req.params.exerciseId}, req.body, {new: true}, (err, exercise) => {
        if (err)
            res.send(err);
        res.json(exercise);
    });
};

exports.deleteMuscle = (req, res) => {
    muscle.remove({
        _id: req.params.muscleId
    }, (err, muscle) => {
        if (err)
            res.send(err);
        res.json({message: 'Muscle deleted'});
    });
};

exports.deleteExercise = (req, res) => {
    exercise.remove({
        _id: req.params.exerciseId
    }, (err, exercise) => {
        if (err)
            res.send(err);
        res.json({message: 'Exercise deleted'});
    });
};