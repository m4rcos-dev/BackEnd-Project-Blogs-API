const { getPostById } = require('../services/postService');

const validadeUpdatePost = async (req, res, next) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const idUserPost = getPostById(id).user.id;
  const idCurrentUser = req.body.currentUser;

  if (!title || !content) {
    return res.status(400)
      .json({ message: 'Some required fields are missing' });
  }

  if (idUserPost !== idCurrentUser) return res.status(401).json({ message: 'Unauthorized user' });

  next();
};

module.exports = validadeUpdatePost;
