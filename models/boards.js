'use strict';
module.exports = (sequelize, DataTypes) => {
  const boards = sequelize.define('boards', {
    name: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    members: {
      type : DataTypes.ARRAY(DataTypes.INTEGER),
      default: []
    }
  }, {});
  boards.associate = function(models) {
    // associations can be defined here
  };
  return boards;
};