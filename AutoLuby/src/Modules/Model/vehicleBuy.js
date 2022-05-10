const {Sequelize, DataTypes} = require('sequelize');
const database = require('../../Database');
const { uuidv4 } = require("uuid");
const Vehicle = require('./vehicle');

const VehicleBuy = database.define('vehicleBuy', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        allowNull: false,
        primaryKey: true
    },
    precoCompra: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    data: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
})

VehicleBuy.associate = function(models){
    VehicleBuy.hasOne(models.account, {
        constraint: true,
        foreignkey: 'accountId'
    })
    VehicleBuy.hasOne(models.account, {
        constraint: true,
        foreignkey: 'vendedorId'
    })
    VehicleBuy.hasMany(models.vehicle, {
        constraint: true,
        foreignkey: 'vehicle_Id'
    })
}
module.exports = VehicleBuy;