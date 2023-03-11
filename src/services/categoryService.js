const { Category } = require('../models');

const createCategory = async (category) => {
  const { name } = category;
  if (!name) return { status: 400, message: '"name" is required' };
  const categoryCreated = await Category.create(category);
  return { status: 201, categoryCreated };
};

module.exports = { createCategory };

// Requirement 08
