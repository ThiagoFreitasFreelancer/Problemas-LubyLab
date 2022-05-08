const Sequelize = require('sequelize');
//const bd = require(`./src/Database`);

const connection = new Sequelize('autoluby', 'root', '1234', {dialect: 'mysql', host: 'localhost'});

module.exports = connection

