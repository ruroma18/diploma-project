'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RefreshToken extends Model {

    static associate({User}) {
      RefreshToken.belongsTo(User, {foreignKey: 'userId'})
    }
  }
  RefreshToken.init({
    token: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userId: {
      field: 'user_id',
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'RefreshToken',
    tableName: 'refresh_token',
    underscored: true
  });
  return RefreshToken;
};