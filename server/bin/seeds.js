require('dotenv').config();

const mongoose = require("mongoose");
const Note = require("../models/Note")

mongoose
  .connect('mongodb://localhost/appApi', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  