const { BlogPost, PostCategory, User, Category, sequelize } = require('../models');

const createPost = async (post) => {
  const { title, content, categoryIds } = post;
  const { id } = post.currentUser;
  const currentPost = { title, content, userId: id };

  const result = await sequelize.transaction(async (t) => {
    const postCreated = await BlogPost.create(currentPost, { transaction: t });

    await Promise.all(categoryIds.map(async (categoryId) => {
      const currentCategory = { postId: postCreated.dataValues.id, categoryId };
      await PostCategory.create(currentCategory, { transaction: t });
    }));

    return postCreated;
  });

  return result;
};

const getAllPosts = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'category', through: { attributes: [] } },
    ],
  });
  return allPosts;
};

module.exports = { createPost, getAllPosts };

// Requirement 12
