const express = require('express');
const userController = require('../controllers/userController');
const validateUser = require('../middleware/validateUser');

const userRoute = express.Router();

userRoute.post('/', validateUser, userController.createUser);

module.exports = userRoute;
