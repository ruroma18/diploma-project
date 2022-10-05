'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Section extends Model {
    static associate({ Course }) {
      Section.belongsTo(Course, {foreignKey: 'courseId'})
    }
  }
  Section.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        notEmpty: true,
        notNull: true
      }
    },
    docPath: {
      field: 'doc_path',
      type: DataTypes.STRING
    },
    taskPath: {
      field: 'task_path',
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Section',
    tableName: 'sections',
    underscored: true
  });
  return Section;
};