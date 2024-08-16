const express = require('express');
const authJWT = require('../middlewares/authJWT');
const todoController = require('../controllers/todoController');
const router = express.Router();


router.post('/createtask',authJWT,todoController)
router.post('/gettask/:userId',authJWT,todoControllerss.gettodoController)

module.exports = router;