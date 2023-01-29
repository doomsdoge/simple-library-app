'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.borrowing, {
        foreignKey: 'book_id'
      })
    }
  }
  book.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    year: DataTypes.INTEGER,
    category: DataTypes.STRING,
    available_copies: DataTypes.INTEGER,
    total_copies: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};