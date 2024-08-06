const express = require('express');
const adminControllers = require('../../controllers/adminControllers');
const adminControllers2 = require('../../controllers/adminControllers');
const adminRoute = express.Router();

adminRoute.post('/Products',adminControllers)

adminRoute.post('/Orders',adminControllers2)


module.exports = adminRoute;