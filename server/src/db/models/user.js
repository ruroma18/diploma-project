'use strict';
const { Model } = require('sequelize');
const { TEACHER, STUDENT } = require('../../constants');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({Course, Task, RefreshToken}) {
      User.hasMany(Course, {foreignKey: 'teacherId'}),
      User.belongsToMany(Course, {
        through: 'students_to_coruses',
        foreignKey: 'userId'
      }),
      User.belongsToMany(Task, {
        foreignKey: 'userId',
        through: 'students_to_tasks'
      })
      User.hasMany(RefreshToken, {foreignKey: 'userId'})
    }
  }
  User.init({
    firstName: {
      field: 'first_name',
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        is: /(^[a-яA-я][a-яA-я\s]{2,20}[a-яA-Я]$)/,
        notEmpty: true,
        notNull: true
      }
    },
    lastName: {
      field: 'last_name',
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        is: /(^[a-яA-я][a-яA-я\s]{2,20}[a-яA-Я]$)/,
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
      type: DataTypes.ENUM(TEACHER, STUDENT)
    },
    photoPath: {
      field: 'photo_path',
      type: DataTypes.STRING
    },
    accessToken: {
      field: 'access_token',
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    underscored: true,
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};