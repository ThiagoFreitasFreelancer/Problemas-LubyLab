const { STRING } = require('sequelize');
const VEHICLE = require('./vehicle')
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
    veiculo: {
        type: Sequelize.INTEGER,
        references:{model: 'vehicle', key: 'vehicle_id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'    
    },
    biografia: {
        type: Sequelize.STRING
    }

})

module.exports = Account;