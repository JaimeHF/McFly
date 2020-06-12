const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const noteSchema = new Schema({
    username: String,
    note: String,
    fav: Boolean
}, {
    timestamps: {
      created_at: 'created_at',
      updated_at: 'updated_at'
    }
  });


  
const Note = mongoose.model('Notes', noteSchema);
module.exports = Note;