const express = require('express');
const postController = require('../controllers/postController');

const postRoute = express.Router();

postRoute.post('/', postController.createPost);

module.exports = postRoute;
