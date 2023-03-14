const postService = require('../services/postService');

const getAllPosts = async (_req, res) => {
  // #swagger.tags = ['Post']
  const allPosts = await postService.getAllPosts();
  return res.status(200).json(allPosts);
};

const getPostById = async (req, res) => {
  // #swagger.tags = ['Post']
  const { id } = req.params;
  const { status, message, currentPost } = await postService.getPostById(id);
  if (message) return res.status(status).json({ message });
  return res.status(status).json(currentPost);
};

const getByTerm = async (req, res) => {
  // #swagger.tags = ['Post']
  const { q } = req.query;
  const likePost = await postService.getByTerm(q);
  return res.status(200).json(likePost);
 };

const createPost = async (req, res) => {
  // #swagger.tags = ['Post']
  const post = req.body;
  const postCreated = await postService.createPost(post);
  return res.status(201).json(postCreated);
};

const updatePost = async (req, res) => {
  // #swagger.tags = ['Post']
  const { id } = req.params;
  const { body } = req;
  const { status, message, updatedPost } = await postService.updatePost(id, body);
  if (message) return res.status(status).json({ message });
  return res.status(status).json(updatedPost);
};

const removePost = async (req, res) => {
  // #swagger.tags = ['Post']
  const { id } = req.params;
  const removedPost = await postService.removePost(id);
  return res.status(204).json(removedPost);
};

module.exports = { createPost, getAllPosts, getPostById, updatePost, removePost, getByTerm };
