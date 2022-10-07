'use strict';
const { Model } = require('sequelize');
const { VIDEO, FILE } = require('../../constants');
module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    static associate({ Section }) {
      Material.belongsTo(Section, {foreignKey: 'materialId'})
    }
  }
  Material.init({
    name: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM(VIDEO, FILE),
      allowNull: false
    },
    filePath: {
      allowNull: false,
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