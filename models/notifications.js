'use strict';
module.exports = (sequelize, DataTypes) => {
  const notifications = sequelize.define('notifications', {
    name: DataTypes.STRING,
    text: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    recipients: {
      type : DataTypes.ARRAY(DataTypes.INTEGER),
      default: []
    },
    cardId: DataTypes.INTEGER,
    columnId: DataTypes.INTEGER,
    boardId: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {});
  notifications.associate = function(models) {
    // associations can be defined here
  };
  return notifications;
};