'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InputBlock extends Model {

    static associate(models) {
      InputBlock.belongsTo(Task, {foreignKey: 'taskId'})
    }
  }
  InputBlock.init({
    posX: {
      type: DataTypes.NUMBER,
      allowNull: false,
      field: 'pos_x'
    },
    posY: {
      type: DataTypes.NUMBER,
      allowNull: false,
      field: 'pos_y'
    },
    height: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    width: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'InputBlock',
    tableName: 'input_block',
    underscored: true
  });
  return InputBlock;
};