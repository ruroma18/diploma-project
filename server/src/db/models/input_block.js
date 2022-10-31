'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InputBlock extends Model {

    static associate({Task}) {
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
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    width: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  }, {
    sequelize,
    underscored: true,
    modelName: 'InputBlock',
    tableName: 'input_blocks',
  });
  return InputBlock;
};