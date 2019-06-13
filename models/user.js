'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      required: true
    },
    password: {
      type: DataTypes.STRING,
      unique: true,
      required: true
    },
    nickname: {
      type: DataTypes.STRING,
      unique: true,
      required: true
    }
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};