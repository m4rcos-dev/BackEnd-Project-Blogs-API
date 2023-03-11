const { BlogPost } = require('../models');

const createPost = async (body) => {
  const { title, content } = body;
  const { id } = body.currentUser;
  const currentPost = {
    title,
    content,
    userId: id,
    updated: new Date(),
    published: new Date(),
  };
  const postCreated = await BlogPost.create(currentPost);
  return postCreated;
};

module.exports = { createPost };
