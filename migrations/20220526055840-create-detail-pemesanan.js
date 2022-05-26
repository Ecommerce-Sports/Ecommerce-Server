'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Detail_Pemesanans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      no_invoice: {
        type: Sequelize.STRING
      },
      nama_lengkap: {
        type: Sequelize.STRING
      },
      nama_kota: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      nama_produk: {
        type: Sequelize.STRING
      },
      harga_produk: {
        type: Sequelize.INTEGER
      },
      jumlah_produk: {
        type: Sequelize.INTEGER
      },
      harga_produk: {
        type: Sequelize.INTEGER
      },
      pengiriman: {
        type: Sequelize.STRING
      },
      metode_pembayaran: {
        type: Sequelize.STRING
      },
      total_produk: {
        type: Sequelize.INTEGER
      },
      estimasi_hari: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Detail_Pemesanans');
  }
};