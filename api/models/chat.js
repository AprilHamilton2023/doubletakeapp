'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {}

  Chat.init({
    Course: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 250],
        notEmpty: true,
      }
    },
    Topic: {
        type: DataTypes.STRING,
    },

  }, {
    sequelize,
    modelName: 'textbook'
  });

  Chat.associate = (models) => {
    // associations can be defined here
  };

  return Chat;
};
