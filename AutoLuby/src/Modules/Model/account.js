const { STRING } = require('sequelize');
const VEHICLE = require('../../Modules/Vehicles/vehicle')
const Sequelize = require('sequelize');
const database = require('../../Database');

const Account = database.define('account', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    avatar: {
        type: Sequelize.STRING
    },
    tipoConta: {
        type: Sequelize.STRING,
        allowNull: false
    },
    veiculos: {
        type: Sequelize.ARRAY,
        allowNull: false
    },
    biografia: {
        type: Sequelize.STRING
    }

})

module.exports = Account;