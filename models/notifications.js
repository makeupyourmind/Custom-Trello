'use strict';
module.exports = (sequelize, DataTypes) => {
  const notifications = sequelize.define('notifications', {
    name: DataTypes.STRING,
    text: DataTypes.STRING,
    authorId: DataTypes.STRING,
    recipients: {
      type : DataTypes.ARRAY(DataTypes.STRING),
      default: []
    },
    cardId: DataTypes.STRING,
    columnId: DataTypes.STRING,
    boardId: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  notifications.associate = function(models) {
    // associations can be defined here
  };
  return notifications;
};