'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VehicleBuy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  VehicleBuy.init({
    precoVenda: DataTypes.STRING,
    data: DataTypes.DATE,
    statusVeiculo: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'VehicleBuy',
  });
  return VehicleBuy;
};