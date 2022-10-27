'use strict';
const { Model } = require('sequelize');
const { VIDEO, FILE } = require('../../constants');
module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    static associate({ Section }) {
      Material.belongsTo(Section, {foreignKey: 'sectionId'})
    }
  }
  Material.init({
    name: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    filePath: {
      allowNull: true,
      type: DataTypes.STRING,
      field: 'file_path'
    }
  }, {
    sequelize,
    modelName: 'Material',
    tableName: 'materials',
    underscored: true
  });
  return Material;
};