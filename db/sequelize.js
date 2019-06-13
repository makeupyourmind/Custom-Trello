const Sequelize = require('sequelize');
const UserModel = require('../models/user');
const BoardsModel = require('../models/boards');
const ColumnsModel = require('../models/columns');
const CardsModel = require('../models/cards');
//                              database, username, password
const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: 5432
})

 const User = UserModel(sequelize, Sequelize);
 const Boards = BoardsModel(sequelize, Sequelize);
 const Columns = ColumnsModel(sequelize, Sequelize);
 const Cards = CardsModel(sequelize, Sequelize);
 
 module.exports = {User, Boards, Columns, Cards};
