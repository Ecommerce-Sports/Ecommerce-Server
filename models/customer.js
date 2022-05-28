'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Customer.init({
    nama_lengkap: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATE,
    no_hp: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    alamat: DataTypes.STRING,
    ibu_kandung: DataTypes.STRING,
    pekerjaan: DataTypes.STRING,
    pendapatan: DataTypes.INTEGER,
    kota: DataTypes.STRING,
    kecamatan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};