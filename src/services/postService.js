const { BlogPost, PostCategory, sequelize } = require('../models');

const createPost = async (post) => {
  const { title, content, categoryIds } = post;
  const { id } = post.currentUser;
  const currentPost = {
    title,
    content,
    userId: id,
    updated: new Date(),
    published: new Date(),
  };

  const result = await sequelize.transaction(async (t) => {
    const postCreated = await BlogPost.create(currentPost, { transaction: t });

    await Promise.all(categoryIds.foreach(async (categoryId) => {
      const currentCategory = { postId: postCreated.id, categoryId };
      await PostCategory.create(currentCategory, { transaction: t });
    }));
    
    return postCreated;
  });

  return result;
};

module.exports = { createPost };
