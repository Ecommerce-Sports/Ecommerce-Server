'use strict';
const {
  Model
} = require('sequelize');

const { hashPass } = require("../helpers/bcrypt");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : `email harus diisi`
        },
        isEmail : {
          args : true,
          msg : 'email telah pernah didaftarkan'
        }
      },
      unique : true,
    },
    nama_depan: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : `nama depan harus diisi`
        }
      }
    },
    nama_belakang: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : `nama belakang harus diisi`
        }
      }
    },
    role: DataTypes.STRING,
    no_telepon: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : `nomor telepon harus diisi`
        }
      }
    },
    tanggal_lahir: {
      type : DataTypes.DATE,
      validate : {
        notEmpty : {
          args : true,
          msg : `tanggal lahir harus diisi`
        }
      }
    },
    username: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : `username harus diisi`
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        len : {
          args : [6, 20],
          msg : `minimal karakter password 6 karakter dan maksimal 20 karakter`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user, opt) => {
        user.password = hashPass(user.password)
      }
    }
  });
  return User;
};