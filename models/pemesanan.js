'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pemesanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pemesanan.init({
    nomor_invoice: DataTypes.STRING,
    nama_pemesan: DataTypes.STRING,
    status: DataTypes.STRING,
    total_pembayaran: DataTypes.INTEGER,
    resi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pemesanan',
  });
  return Pemesanan;
};