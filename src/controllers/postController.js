const postService = require('../services/postService');

const createPost = async (req, res) => {
  const post = req.body;
  const postCreated = await postService.createPost(post);
  return res.status(201).json(postCreated);
};

const getAllPosts = async (_req, res) => {
  const allPosts = await postService.getAllPosts();
  return res.status(200).json(allPosts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const currentPost = await postService.getPostById(id);
  return res.status(200).json(currentPost);
};

module.exports = { createPost, getAllPosts, getPostById };
