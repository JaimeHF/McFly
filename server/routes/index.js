const express = require('express');
const router  = express.Router();

router.use(`/API`, require(`./API`))

module.exports = router;
