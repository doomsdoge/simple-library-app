'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class borrowing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {
        foreignKey: 'user_id'
      })

      this.belongsTo(models.book, {
        foreignKey: 'book_id'
      })
    }
  }
  borrowing.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    issue_date: DataTypes.DATEONLY,
    return_date: DataTypes.DATEONLY,
    status: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'borrowing',
  });
  return borrowing;
};