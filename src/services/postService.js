const { BlogPost } = require('../models');

const createPost = async (post) => {
  const { title, content } = post;
  const { id } = post.currentUser;
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
