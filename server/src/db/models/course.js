'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {

    static associate({ User, Section }) {
      Course.belongsTo(User, {foreignKey: 'userId'}),
      Course.belongsToMany(User, {
        foreignKey: 'userId',
      }),
      Course.hasMany(Section, {foreignKey: 'courseId'})
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
      field: 'img_path',
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