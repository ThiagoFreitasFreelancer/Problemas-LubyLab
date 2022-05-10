const {Sequelize, DataTypes} = require('sequelize');
const database = require('../../Database');
const { uuidv4 } = require("uuid");
const Account = require('./account');

const Vehicle = database.define('vehicle', {
    vehicle_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: true
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    chassi: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    km: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ano: {
        type: DataTypes.STRING,
        allowNull: false
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    tipoVeiculo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    descrisao: {
        type: DataTypes.STRING,
        allowNull: true
    },
})

Vehicle.associate = function(models){
    Vehicle.hasOne(models.account, {
        constraint: true,
        foreignkey: 'Id',
        allowNull: true
    })
}

module.exports = Vehicle;