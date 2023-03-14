const express = require('express');
const postController = require('../controllers/postController');
const validateToken = require('../middleware/validateToken');
const validatePost = require('../middleware/validatePost');
const validateCurrentUserPost = require('../middleware/validateCurrentUserPost');

const postRoute = express.Router();

postRoute.post('/', validateToken, validatePost, postController.createPost);
postRoute.get('/', validateToken, postController.getAllPosts);
postRoute.get('/:id', validateToken, postController.getPostById);
postRoute.put('/:id', validateToken, validateCurrentUserPost, postController.updatePost);

module.exports = postRoute;
