const postService = require('../services/postService');

const createPost = async (req, res) => {
  const post = req.body;
  const postCreated = await postService.createPost(post);
  return res.status(201).json(postCreated);
};

const getAllPosts = async (req, res) => {
  const allPosts = await postService.getAllPosts();
  return res.status(200).json(allPosts);
};

module.exports = { createPost, getAllPosts };
