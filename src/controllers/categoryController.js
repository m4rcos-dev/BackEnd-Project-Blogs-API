const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
  const category = req.body;
  const { status, message, categoryCreated } = await categoryService.createCategory(category);
  if (message) return res.status(status).json({ message });
  return res.status(status).json(categoryCreated);
};

const getAllCategories = async (req, res) => {
  const allCategories = await categoryService.getAllCategories();
  return res.status(200).json(allCategories);
};

module.exports = { createCategory, getAllCategories };
