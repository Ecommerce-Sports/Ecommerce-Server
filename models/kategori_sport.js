'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kategori_Sport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Kategori_Sport.init({
    nama_kategori: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Kategori_Sport',
  });
  return Kategori_Sport;
};