'use strict';
module.exports = (sequelize, DataTypes) => {
  const cards = sequelize.define('cards', {
    name: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    members: {
      type : DataTypes.ARRAY(DataTypes.INTEGER),
      default: []
    },
    columnId: DataTypes.INTEGER,
    order: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  cards.associate = function(models) {
    // associations can be defined here
  };
  return cards;
};
