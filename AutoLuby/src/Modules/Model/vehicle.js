const Sequelize = require('sequelize');
const database = require('../../Database');

const Produto = database.define('vehicle', {
    vehicle_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.DOUBLE
    },
    tipoVeiculo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descrisao: {
        type: Sequelize.STRING,
    },
})

module.exports = Produto;