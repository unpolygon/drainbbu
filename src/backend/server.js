const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

var app = express()
const port = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());

app.get('/water-api',function(req,res){
    res.send('this is the homepage');
});

app.get('/favicon.ico', (req, res) => res.status(204));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{ 
    useNewUrlParser: true , 
    useUnifiedTopology: true, 
    useNewUrlParser: true,
    useCreateIndex: true,});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const GraphRouter = require('./routes/Graph');
const QGraphRouter = require('./routes/QGraph');
const WlGraphRouter = require('./routes/WlGraph');
app.use('/AddGraph', GraphRouter);

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/QGraph', QGraphRouter);
app.use('/WlGraph', WlGraphRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});