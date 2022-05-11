'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vehicles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      marca: {
        allowNull: false,
        type: Sequelize.STRING
      },
      chassi: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      km: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ano: {
        allowNull: false,
        type: Sequelize.DATE
      },
      modelo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      preco: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tipoVeiculo: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.TEXT
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Vehicles');
  }
};