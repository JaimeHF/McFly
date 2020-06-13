const express = require('express');
const router  = express.Router();

const Note = require("../../models/Note")

router.get(`/favorites`,(req, res, next)=>{
    Note.find({fav:true})
    .then(allFavorites => res.json(allFavorites))
    .catch(err => console.log(err))
})

router.post(`/new`,(req, res,next)=>{
    Note.create(req.body)
    .then(newNote => res.json(newNote))
    .catch(err => console.log(err))
})


router.get(`/`, (req, res,next)=>{
    Note.find()
    .then(allNote=> res.json(allNote))
    .catch(err => console.log(err))
})

router.get(`/:id`,(req, res, next)=>{
    Note.findById(req.params.id)
       .then((note) => {res.json(note)})
       .catch(err => console.log(err))

})

router.put(`/:id`,(req, res, next)=>{
    Note.findByIdAndUpdate(req.params.id,{
        fav:true
    },{new:true})
    .then((favNote) => res.json(favNote))
    .catch(err => console.log(err))
})




module.exports = router;
