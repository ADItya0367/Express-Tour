const express = require('express');
const userController  = require('../controllers/userController');
const userRoute = express();

userRoute.post('/',userController);


module.exports = userRoute;