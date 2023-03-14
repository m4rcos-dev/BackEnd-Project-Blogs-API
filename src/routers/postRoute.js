const express = require('express');
const postController = require('../controllers/postController');
const validateToken = require('../middleware/validateToken');
const validatePost = require('../middleware/validatePost');
const validateCurrentUserPost = require('../middleware/validateCurrentUserPost');

const postRoute = express.Router();

postRoute.get('/search', validateToken, postController.getByTerm);
postRoute.get('/', validateToken, postController.getAllPosts);
postRoute.get('/:id', validateToken, postController.getPostById);
postRoute.post('/', validateToken, validatePost, postController.createPost);
postRoute.put('/:id', validateToken, validateCurrentUserPost, postController.updatePost);
postRoute.delete('/:id', validateToken, validateCurrentUserPost, postController.removePost);

module.exports = postRoute;
