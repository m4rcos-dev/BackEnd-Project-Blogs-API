const express = require('express');
const categoryController = require('../controllers/categoryController');
const validateToken = require('../middleware/validateToken');

const categoryRoute = express.Router();

categoryRoute.post('/', validateToken, categoryController.createCategory);

module.exports = categoryRoute;
