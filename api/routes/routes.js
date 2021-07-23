module.exports = (app) => {
    const workoutsGenerator = require('../controllers/controller.js');

    app.route('/api/muscles')
        .get(workoutsGenerator.listMuscles)
        .post(workoutsGenerator.createMuscle);

    app.route('/muscles/:muscleId')
        .get(workoutsGenerator.readMuscle)
        .put(workoutsGenerator.updateMuscle)
        .delete(workoutsGenerator.deleteMuscle);

    app.route('/api/exercises')
        .get(workoutsGenerator.listExercises)
        .post(workoutsGenerator.createExercise);

    app.route('/exercises/:exerciseId')
        .get(workoutsGenerator.readExercise)
        .put(workoutsGenerator.updateExercise)
        .delete(workoutsGenerator.deleteExercise);

    app.route('/api/exercise')
        .get(workoutsGenerator.getRandomExercise);

    app.route('/api/exercise/:muscleId')
        .get(workoutsGenerator.getRandomExerciseByMuscle);
};