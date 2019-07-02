'use strict';
module.exports = (sequelize, DataTypes) => {
  const columns = sequelize.define('columns', {
    name: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    boardId: DataTypes.INTEGER,
    order: DataTypes.INTEGER
  }, {});
  columns.associate = function(models) {
    // associations can be defined here
  };
  return columns;
};