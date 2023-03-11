const express = require('express');
const postController = require('../controllers/postController');
const validateToken = require('../middleware/validateToken');

const postRoute = express.Router();

postRoute.post('/', validateToken, postController.createPost);

module.exports = postRoute;
