'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    nomor_invoice: DataTypes.STRING,
    nama_pemesan: DataTypes.STRING,
    status: DataTypes.STRING,
    total_pembayaran: DataTypes.INTEGER,
    resi: DataTypes.STRING,
    nama_kota: DataTypes.STRING,
    alamat: DataTypes.STRING,
    nama_produk: DataTypes.STRING,
    harga_produk: DataTypes.INTEGER,
    jumlah_produk: DataTypes.INTEGER,
    harga_produk: DataTypes.INTEGER,
    pengiriman: DataTypes.STRING,
    metode_pembayaran: DataTypes.STRING,
    total_produk: DataTypes.INTEGER,
    estimasi_hari: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};