'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({Course}) {
      User.hasMany(Course, {foreignKey: 'userId'}),
      User.belongsToMany(Course, {
        through: 'studens_to_course',
        foreignKey: 'userId'
      })
    }
  }
  User.init({
    firstName: {
      field: 'first_name',
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
        notEmpty: true,
        notNull: true
      }
    },
    lastName: {
      field: 'last_name',
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
        notEmpty: true,
        notNull: true
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true,
        notEmpty: true,
        notNull: true
      }
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        notEmpty: true,
        notNull: true
      }
    },
    role: {
      allowNull: false,
      type: DataTypes.ENUM('teacher', 'student')
    },
    photoPath: {
      field: 'photo_path',
      type: DataTypes.STRING
    },
  }, {
    underscored: true,
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};