const express = require('express');
const postController = require('../controllers/postController');
const validateToken = require('../middleware/validateToken');
const validatePost = require('../middleware/validatePost');

const postRoute = express.Router();

postRoute.post('/', validateToken, validatePost, postController.createPost);

module.exports = postRoute;
