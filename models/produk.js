'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Produk.init({
    nama_produk: DataTypes.STRING,
    kategori_produk: DataTypes.STRING,
    stok: DataTypes.INTEGER,
    bahan: DataTypes.STRING,
    harga_produk: DataTypes.INTEGER,
    ukuran: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    gambar_produk: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Produk',
  });
  return Produk;
};