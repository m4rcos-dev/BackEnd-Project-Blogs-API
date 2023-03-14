const { Op } = require('sequelize');
const { BlogPost, PostCategory, User, Category, sequelize } = require('../models');

const getAllPosts = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return allPosts;
};

const getPostById = async (id) => {
  const currentPost = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!currentPost) return { status: 404, message: 'Post does not exist' };
  return { status: 200, currentPost };
};

const getByTerm = async (term) => {
  const likePost = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${term}%` } },
        { content: { [Op.like]: `%${term}%` } },
      ],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return likePost;
};

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

const updatePost = async (id, { title, content }) => {
  if (!title || !content) {
    return { status: 400, message: 'Some required fields are missing' };
  }

  const updatingPost = await BlogPost.update({ title, content }, { where: { id } });
  if (!updatingPost[0]) {
    return { status: 400, message: 'Internal error when trying to update post' };
  }

  const currentUpdatedPost = await getPostById(id);
  const updatedPost = currentUpdatedPost.currentPost;
  return { status: 200, updatedPost };
};

const removePost = async (id) => {
  await BlogPost.destroy({ where: { id } });
  return null;
};

module.exports = { createPost, getAllPosts, getPostById, updatePost, removePost, getByTerm };
