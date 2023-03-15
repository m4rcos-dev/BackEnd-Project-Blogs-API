const categoryService = require('../services/categoryService');

const getAllCategories = async (_req, res) => {
  // #swagger.tags = ['Category']
  const allCategories = await categoryService.getAllCategories();
  return res.status(200).json(allCategories);
};

const createCategory = async (req, res) => {
  // #swagger.tags = ['Category']
  /*  #swagger.parameters['obj'] = {
      in: 'body',
      description: 'You need to enter a valid category',
      schema: {
          $name: 'Typescript',
      }
} */

  /* #swagger.responses[201] = {
              description: 'Obj category registred.',
      } */

  /* #swagger.responses[400] = {
        description: 'The "name" is required.',
} */
  const category = req.body;
  const { status, message, categoryCreated } = await categoryService.createCategory(category);
  if (message) return res.status(status).json({ message });
  return res.status(status).json(categoryCreated);
};

module.exports = { createCategory, getAllCategories };
