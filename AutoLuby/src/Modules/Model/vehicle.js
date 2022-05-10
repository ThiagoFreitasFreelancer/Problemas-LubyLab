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
        type: DataTypes.TEXT,
        allowNull: true
    },
    marca: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    chassi: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    km: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ano: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    modelo: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    preco: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    tipoVeiculo: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    descrisao: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    status: {
        type: DataTypes.TEXT,
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