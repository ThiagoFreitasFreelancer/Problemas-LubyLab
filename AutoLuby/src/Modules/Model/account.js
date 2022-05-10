const { DataTypes } = require('sequelize');
const database = require('../../Database');
const { uuidv4 } = require("uuid");
const Vehicle = require('./vehicle');

const Account = database.define('account', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    senha: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
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
        foreignkey: 'vehicle_Id',
        allowNull: true
    })
    Account.hasMany(models.vehicleBuy, {
        constraint: true,
        foreignkey: 'vehicleBuyId',
        allowNull: true
    })
}
module.exports = Account;