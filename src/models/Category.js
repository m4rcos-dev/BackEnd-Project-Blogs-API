module.exports = (sequelize, DataTypes) => {
  const Categorie = sequelize.define('Category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING
  }, {
    tableName: 'categorie',
    timestamps: false,
    underscored: true,
  });
  return Categorie;
};
