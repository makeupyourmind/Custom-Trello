'use strict';
module.exports = (sequelize, DataTypes) => {
  const columns = sequelize.define('columns', {
    name: DataTypes.STRING,
    authorId: DataTypes.STRING,
    boardId: DataTypes.STRING,
    order: DataTypes.STRING
  }, {});
  columns.associate = function(models) {
    // associations can be defined here
  };
  return columns;
};