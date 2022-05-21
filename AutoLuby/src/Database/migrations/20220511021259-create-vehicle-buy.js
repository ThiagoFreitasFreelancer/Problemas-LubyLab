'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('VehicleBuys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      precoVenda: {
        allowNull: false,
        type: Sequelize.STRING
      },
      vendedorCpf: {
        allowNull: false,
        type: Sequelize.STRING
      },
      chassiVeiculo: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      data: {
        allowNull: false,
        type: Sequelize.DATE
      },
      statusVeiculo: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('VehicleBuys');
  }
};