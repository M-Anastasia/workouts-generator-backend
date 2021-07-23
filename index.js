const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;

// todo replace with environment variable
const connectionUrl = "mongodb+srv://admin:admin@workouts-generator.xrm13.mongodb.net/workouts-generator?retryWrites=true&w=majority";
mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const routes = require('./api/routes/routes.js');

routes(app);

app.listen(port, ()=> {
    console.log(`RESTful API server running on ${port}`);
});