'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {

    static associate({ User, Section }) {
      Course.belongsTo(User, {foreignKey: 'course_id'}),
      Course.belongsToMany(User, {
        through: 'students_to_coruses',
        foreignKey: 'course_id',
      }),
      Course.hasMany(Section, {foreignKey: 'course_id'})
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