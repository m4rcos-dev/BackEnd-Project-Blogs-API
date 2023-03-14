const postService = require('../services/postService');

const getAllPosts = async (_req, res) => {
  // #swagger.tags = ['Post']
  const allPosts = await postService.getAllPosts();
  return res.status(200).json(allPosts);
};

const getPostById = async (req, res) => {
  // #swagger.tags = ['Post']
  /* #swagger.responses[200] = {
            description: 'Ok',
    } */

  /* #swagger.responses[404] = {
          description: 'Post does not exist',
  } */
  const { id } = req.params;
  const { status, message, currentPost } = await postService.getPostById(id);
  if (message) return res.status(status).json({ message });
  return res.status(status).json(currentPost);
};

const getByTerm = async (req, res) => {
  // #swagger.tags = ['Post']
  /* #swagger.responses[200] = {
          description: 'Ok - Post object that based on fetch or empty object in response body ',
  } */
  const { q } = req.query;
  const likePost = await postService.getByTerm(q);
  return res.status(200).json(likePost);
};

const createPost = async (req, res) => {
  // #swagger.tags = ['Post']
  /*  #swagger.parameters['obj'] = {
      in: 'body',
      description: 'You need to enter a valid post',
      schema: {
          $title: 'Latest updates, August 1st',
          $content: 'The whole text for the blog post goes here in this key',
          $categoryIds: [1, 2],
      }
} */

  /* #swagger.responses[400] = {
        description: `Some required fields are missing.
        <br>One or more "categoryIds" not found.`,
} */
  const post = req.body;
  const postCreated = await postService.createPost(post);
  return res.status(201).json(postCreated);
};

const updatePost = async (req, res) => {
  // #swagger.tags = ['Post']
  /*  #swagger.parameters['obj'] = {
    in: 'body',
    description: 'You need to enter a valid post',
    schema: {
        $title: 'Latest updates, August 1st',
        $content: 'The whole text for the blog post goes here in this key',
    }
} */

  /* #swagger.responses[200] = {
        description: `Updated`,
} */

  /* #swagger.responses[400] = {
        description: `Some required fields are missing`,
} */

  /* #swagger.responses[404] = {
          description: 'Post does not exist',
  } */
  const { id } = req.params;
  const { body } = req;
  const { status, message, updatedPost } = await postService.updatePost(id, body);
  if (message) return res.status(status).json({ message });
  return res.status(status).json(updatedPost);
};

const removePost = async (req, res) => {
  // #swagger.tags = ['Post']
  /* #swagger.responses[204] = {
      description: `Deleted - without response body`,
} */

  /* #swagger.responses[404] = {
          description: 'Post does not exist',
  } */
  const { id } = req.params;
  const removedPost = await postService.removePost(id);
  return res.status(204).json(removedPost);
};

module.exports = { createPost, getAllPosts, getPostById, updatePost, removePost, getByTerm };
