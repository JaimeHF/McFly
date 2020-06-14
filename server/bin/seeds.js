require('dotenv').config();

const mongoose = require("mongoose");
const Note = require("../models/Note")

mongoose
  .connect(`${process.env.DB_LOCAL}`, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  let notes =[{
    username:"Lorem",
    note:"Supongo que ustedes no están preparados para esta música. Pero a sus hijos les encantará.",
    fav:true,
  },
  {
    username:"ipsum",
    note:"- Pero Doc, ¿has construido una máquina del tiempo con un De Lorean? - En mi opinión, si vas a hacer algo como esto, hazlo con estilo.",
    fav:true,
  },
  {
    username:"dolor",
    note:"¡Esto es lo que permite viajar en el tiempo, el condensador de fluzo!",
    fav:false,
  },
  {
    username:"sit",
    note:"¿Qué pasa, McFly? ¿Eres un gallina? ¡Gallina, McFly!",
    fav:true,
  },
  {
    username:"amet",
    note:"¡Nadie me llama gallina!",
    fav:false,
  },
  {
    username:"consectetur",
    note:"¿Qué nos ocurre en el futuro? ,¿nos volvemos gilipollas,o algo perecido?",
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