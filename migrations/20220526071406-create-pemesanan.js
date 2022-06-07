'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pemesanans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomor_invoice: {
        type: Sequelize.STRING
      },
      nama_pemesan: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      total_pembayaran: {
        type: Sequelize.INTEGER
      },
      resi: {
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
    await queryInterface.dropTable('Pemesanans');
  }
};