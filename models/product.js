'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category)
    }
  }
  Product.init({
    nama_produk: DataTypes.STRING,
    stok: DataTypes.INTEGER,
    bahan: DataTypes.STRING,
    harga_produk: DataTypes.INTEGER,
    ukuran: DataTypes.STRING,
    deskripsi: DataTypes.TEXT,
    gambar_produk: DataTypes.STRING,
    CategoryId: DataTypes.INTEGER,
    berat: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};