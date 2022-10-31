'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate({ Section, User, Answer, InputBlock }) {
      Task.belongsTo(Section, { foreignKey: 'sectionId' })
      Task.hasMany(Answer, { foreignKey: 'taskId' }),
      Task.hasOne(InputBlock, { foreignKey: 'taskId' })
      Task.belongsToMany(User, {
        through: 'students_to_tasks',
        foreignKey: 'taskId'
      })
    }
  }
  Task.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    image: {
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