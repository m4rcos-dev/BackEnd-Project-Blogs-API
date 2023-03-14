const { getPostById } = require('../services/postService');

const validadeCurrentUserPost = async (req, res, next) => {
  const { id } = req.params;
  const idCurrentUser = req.body.currentUser.id;

  const { status, message, currentPost } = await getPostById(id);
  if (message) return res.status(status).json({ message });

  const idUserPost = currentPost.dataValues.userId;
  if (idUserPost !== idCurrentUser) return res.status(401).json({ message: 'Unauthorized user' });

  next();
};

module.exports = validadeCurrentUserPost;
