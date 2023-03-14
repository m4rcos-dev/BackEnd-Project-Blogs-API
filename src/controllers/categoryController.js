const categoryService = require('../services/categoryService');

const getAllCategories = async (_req, res) => {
  // #swagger.tags = ['Category']
  const allCategories = await categoryService.getAllCategories();
  return res.status(200).json(allCategories);
};

const createCategory = async (req, res) => {
  // #swagger.tags = ['Category']
  const category = req.body;
  const { status, message, categoryCreated } = await categoryService.createCategory(category);
  if (message) return res.status(status).json({ message });
  return res.status(status).json(categoryCreated);
};

module.exports = { createCategory, getAllCategories };
