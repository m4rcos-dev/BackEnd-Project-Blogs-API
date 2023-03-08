/**
 *
 * @param {import('sequelize')} sequelize
 * @param {import('sequelize')} DataTypes
 */

module.exports = (sequelize, DataTypes) => {
const PostCategory = sequelize.define('PostCategory',{
  postId: DataTypes.INTEGER,
  categoryId: DataTypes.INTEGER,
}, {
    tableName: 'posts_categories',
    timestamps: false,
    underscored: true,
  });
  PostCategory.associate = ({BlogPost, Category}) => {
    BlogPost.belongsToMany(Category, {
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: 'PostCategory',
      as: 'post',
    });
    Category.belongsToMany(BlogPost, {
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: 'PostCategory',
      as: 'category',
    })
  }
  return PostCategory;
};
