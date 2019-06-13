'use strict';
module.exports = (sequelize, DataTypes) => {
  const boards = sequelize.define('boards', {
    name: DataTypes.STRING,
    authorId: DataTypes.STRING,
    members: {
      type : DataTypes.ARRAY(DataTypes.STRING),
      default: []
    }
  }, {});
  boards.associate = function(models) {
    // associations can be defined here
  };
  return boards;
};