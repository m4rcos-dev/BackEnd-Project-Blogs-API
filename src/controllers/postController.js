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
  const { status, message, currentPost } = await postService.getPostById(id);
  if (message) return res.status(status).json({ message });
  return res.status(status).json(currentPost);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const { status, message, updatedPost } = await postService.updatePost(id, body);
  if (message) return res.status(status).json({ message });
  return res.status(status).json(updatedPost);
};

const removePost = async (req, res) => {
  const { id } = req.params;
  const removedPost = await postService.removePost(id);
  return res.status(204).json(removedPost);
};

const getByTerm = async (req, res) => {
 const { q } = req.query;
 const likePost = await postService.getByTerm(q);
 return res.status(200).json(likePost);
};

module.exports = { createPost, getAllPosts, getPostById, updatePost, removePost, getByTerm };
