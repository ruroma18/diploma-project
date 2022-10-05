'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Section extends Model {
    static associate({ Course, Material, Task  }) {
      Section.belongsTo(Course, {foreignKey: 'section_id'}),
      Section.hasMany(Material, {foreignKey: 'section_id'}),
      Section.hasMany(Task, {foreignKey: 'section_id'})
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