const express = require('express');
const authJWT = require('../middlewares/authJWT');
const todoController = require('../controllers/todoController');
const createtodoRoute = express.Router();


createtodoRoute.post('/createtask',authJWT,todoController)

module.exports = createtodoRoute;