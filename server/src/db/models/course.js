'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {

    static associate({ User, Section }) {
      Course.belongsTo(User, {foreignKey: 'teacherId'}),
      Course.belongsToMany(User, {
        through: 'students_to_coruses',
        foreignKey: 'courseId',
      }),
      Course.hasMany(Section, {foreignKey: 'courseId'})
    }
  }
  Course.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
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