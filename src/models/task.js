'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.GroupTask)
      models.GroupTask.hasMany(Task)
    }
  }
  Task.init({
    name: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    timeTracking: DataTypes.STRING,
    assignedTo: DataTypes.INTEGER,
    groupTaskId: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};