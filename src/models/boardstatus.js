'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BoardStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BoardStatus.belongsTo(models.Board)

      models.Board.hasOne(BoardStatus)
    }
  }
  BoardStatus.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BoardStatus',
  });
  return BoardStatus;
};