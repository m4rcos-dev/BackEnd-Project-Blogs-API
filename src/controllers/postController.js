const postService = require('../services/postService');

const createPost = async (req, res) => {
  const post = req.body;
  const postCreated = await postService.createPost(post);
  return res.status(201).json(postCreated);
};

module.exports = { createPost };
