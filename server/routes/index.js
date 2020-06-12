const express = require('express');
const router  = express.Router();
const Note = require("../models/Note")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});



module.exports = router;
