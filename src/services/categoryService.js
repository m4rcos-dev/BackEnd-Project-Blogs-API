const { Category } = require('../models/Category');

const createCategory = async (category) => {
  const { name } = category;
  if (!name) return { sattus: 400, message: '"name" is required' };
  const categoryCreated = await Category.create(category);
  return { status: 201, categoryCreated };
};

module.exports = { createCategory };
