'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_produk: {
        type: Sequelize.STRING
      },
      kategori_produk: {
        type: Sequelize.STRING
      },
      stok: {
        type: Sequelize.INTEGER
      },
      bahan: {
        type: Sequelize.STRING
      },
      harga_produk: {
        type: Sequelize.INTEGER
      },
      ukuran: {
        type: Sequelize.STRING
      },
      deskripsi: {
        type: Sequelize.STRING
      },
      gambar_produk: {
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
    await queryInterface.dropTable('Products');
  }
};