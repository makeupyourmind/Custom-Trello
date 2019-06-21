'use strict';
module.exports = (sequelize, DataTypes) => {
  const cards = sequelize.define('cards', {
    name: DataTypes.STRING,
    authorId: DataTypes.STRING,
    members: {
      type : DataTypes.ARRAY(DataTypes.STRING),
      default: []
    },
    columnId: DataTypes.STRING,
    order: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  cards.associate = function(models) {
    // associations can be defined here
  };
  return cards;
};
