// const postService = require('../services/postService');

const createPost = async (req, res) => {
  console.log(req.body);
  return res.status(200).json('teste');
};

module.exports = { createPost };
