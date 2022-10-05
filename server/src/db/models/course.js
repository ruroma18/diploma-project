'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {

    static associate({ User }) {
      Course.belongsTo(User, {foreignKey: 'teacherId'})
    }
  }
  Course.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        notEmpty: true,
        notNull: true
      }
    },
    imgPath: {
      type: DataTypes.STRING
    }
  }, {
    underscored: true,
    sequelize,
    tableName: 'courses',
    modelName: 'Course',
  });
  return Course;
};