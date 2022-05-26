'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kategori_sport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kategori_sport.init({
    nama_kategori: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Kategori_Sport',
  });
  return Kategori_Sport;
};