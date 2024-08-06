const express = require('express');
const adminController = require('../controllers/adminController');
const adminRoute = express.Router();

adminRoute.post('/',adminController)

module.exports = adminRoute;