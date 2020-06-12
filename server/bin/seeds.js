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

  let notes =[{
    username:"Lorem",
    note:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    fav:true,
  },
  {
    username:"ipsum",
    note:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    fav:true,
  },
  {
    username:"dolor",
    note:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    fav:false,
  },
  {
    username:"sit",
    note:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    fav:true,
  },
  {
    username:"amet",
    note:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    fav:false,
  },
  {
    username:"consectetur",
    note:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    fav:false,
  }
]


Note.deleteMany()
.then(()=> {
    return Note.insertMany(notes);
})
.then(()=> {
    console.log("succesfully added all the notes");
    mongoose.connection.close();
    process.exit(0);
})
.catch(err => {
    console.error("Error connecting to mongo", err);
});