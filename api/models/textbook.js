'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Textbook extends Model {}

  Textbook.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 250],
        notEmpty: true,
      }
    },
    edition: {
        type: DataTypes.STRING,
    },
    course_name: {
        type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER
    }

  }, {
    sequelize,
    modelName: 'textbook'
  });

  Textbook.associate = (models) => {
    // associations can be defined here
  };

  return Textbook;
};