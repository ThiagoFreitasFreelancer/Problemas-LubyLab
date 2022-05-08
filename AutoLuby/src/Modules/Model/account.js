const { DataTypes } = require('sequelize');
const database = require('../../Database');
const { uuidv4 } = require("uuid");
const Vehicle = require('./vehicle');

const Account = database.define('account', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    senha: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    cpf: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    avatar: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    tipoConta: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    biografia: {
        type: DataTypes.TEXT,
        allowNull: true
    }    
})
Account.associate = function(models){
    Account.hasMany(models.vehicle, {
        constraint: true,
        foreignkey: 'vehicle_Id'
    })
}
module.exports = Account;