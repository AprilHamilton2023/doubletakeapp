'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Tutoring extends Model {}

  Tutoring.init({
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
    modelName: 'Tutoring'
  });

  Tutoring.associate = (models) => {
    // associations can be defined here
  };

  return Tutoring;
};