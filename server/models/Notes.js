const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const noteSchema = new Schema({
    username: String,
    note: {
        type: String,
        required: true
      },
      fav: Boolean
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });


const Note = mongoose.model('Note', noteSchema);
module.exports = Note;