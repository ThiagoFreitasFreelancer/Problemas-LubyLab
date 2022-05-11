'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models => {
        this.hasOne(models.vheicleBuy),
        {
          constraint: true,
          foreignkey: 'vehicleBuy_Id',
          allowNull: true,
          unique: true
        }
      }
    }
  }
  Account.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.TEXT,
    cpf: DataTypes.STRING,
    avatar: DataTypes.STRING,
    tipoConta: DataTypes.STRING,
    biografia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};