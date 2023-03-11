const { Category } = require('../models');

const validatePost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const verifyCategory = categoryIds.map(async (category) => {
    const currentCategory = await Category.findOne({ where: { id: category } });
    return !currentCategory;
  });
  const arrVefifyCategory = await Promise.all(verifyCategory);
  const verifyAllCategories = arrVefifyCategory.every((valid) => !valid);
  if (!verifyAllCategories) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  next();
};

module.exports = validatePost;
