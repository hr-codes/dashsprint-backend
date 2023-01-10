'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GroupTask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GroupTask.belongsTo(models.Board)
      models.Board.hasMany(GroupTask)
    }
  }
  GroupTask.init({
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    boardId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GroupTask',
  });
  return GroupTask;
};