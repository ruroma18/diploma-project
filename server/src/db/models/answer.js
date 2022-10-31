'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {

    static associate(models) {
      Answer.belongsTo(Task, { foreignKey: 'taskId' })
    }
  }
  Answer.init({
    text:
    {
      type: DataTypes.TEXT,
      allowNull: false
    },
    isRight:
    {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Answer',
    tableName: 'answer',
    underscored: true
  });
  return Answer;
};