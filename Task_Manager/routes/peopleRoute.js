const express = require('express');
 

const control = require('../controllers/peopleController');
const router = express.Router();

  router.post('/',control)

module.exports = router;