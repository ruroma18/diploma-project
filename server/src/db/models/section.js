'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Section extends Model {
    static associate({ Course, Material, Task  }) {
      Section.belongsTo(Course, {foreignKey: 'sectionId'}),
      Section.hasMany(Material, {foreignKey: 'sectionId'}),
      Section.hasMany(Task, {foreignKey: 'sectionId'})
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
    }
  }, {
    sequelize,
    modelName: 'Section',
    tableName: 'sections',
    underscored: true
  });
  return Section;
};