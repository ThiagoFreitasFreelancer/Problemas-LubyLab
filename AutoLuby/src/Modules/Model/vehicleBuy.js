const Sequelize = require('sequelize');
const database = require('../../Database');

const Produto = database.define('vehicleBuy', {
    vehicleBuy_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeComprador: {
        type: Sequelize.STRING,
        allowNull: false
    },
    precoCompra: {
        type: Sequelize.DOUBLE
    },
    nomeVeiculo: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Produto;