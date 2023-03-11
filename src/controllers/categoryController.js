const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
  const category = req.body;
  const { status, message, categoryCreated } = await categoryService.createCategory(category);
  if (message) return res.status(200).json({ message });
  return res.status(status).json(categoryCreated);
};

module.exports = { createCategory };
