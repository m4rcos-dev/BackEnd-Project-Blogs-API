const { getPostById } = require('../services/postService');

const validadeUpdatePost = async (req, res, next) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const idCurrentUser = req.body.currentUser.id;

  if (!title || !content) {
    return res.status(400)
      .json({ message: 'Some required fields are missing' });
  }

  const { status, message, currentPost } = await getPostById(id);
  if (message) return res.status(status).json({ message });

  const idUserPost = currentPost.dataValues.userId;
  if (idUserPost !== idCurrentUser) return res.status(401).json({ message: 'Unauthorized user' });

  next();
};

module.exports = validadeUpdatePost;
