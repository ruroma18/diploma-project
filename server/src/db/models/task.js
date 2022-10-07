'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate({ Section, User }) {
      Task.belongsTo(Section, {foreignKey: 'taskId'})
      Task.belongsToMany(User, {
        through: 'students_to_tasks',
        foreignKey: 'taskId'})
    }
  }
  Task.init({
    name: { 
      allowNull: false,
      type: DataTypes.STRING 
    },
    taskPath: {
      field: 'task_path',
      type: DataTypes.STRING,
      allowNull: false
    }

  }, {
    sequelize,
    modelName: 'Task',
    tableName: 'tasks',
    underscored: true
  });
  return Task;
};