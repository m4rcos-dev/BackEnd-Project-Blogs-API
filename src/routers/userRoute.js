const express = require('express');
const userController = require('../controllers/userController');
const validateUser = require('../middleware/validateUser');
const validateToken = require('../middleware/validateToken');

const userRoute = express.Router();

userRoute.post('/', validateUser, userController.createUser);
userRoute.get('/', validateToken, userController.getAllUsers);
userRoute.get('/:id', validateToken, userController.getById);
userRoute.delete('/me', validateToken, userController.removeCurrentUser);

module.exports = userRoute;
