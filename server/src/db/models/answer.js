'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {

    static associate({Task}) {
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
      defaultValue: false
    }
  }, {
    sequelize,
    underscored: true,
    modelName: 'Answer',
    tableName: 'answers',
  });
  return Answer;
};