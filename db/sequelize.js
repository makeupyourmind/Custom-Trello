const Sequelize = require('sequelize');
const UserModel = require('../models/user');

//                              database, username, password
const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: 5432
})


 const User = UserModel(sequelize, Sequelize);

 module.exports = User;
