const { Product, Category } = require("../models");

class Product_Controller {
  static get_products(req, res, next) {
    const { name } = req.query;

    Product.findAll({
      includes: [{ model: Category }]
    })
    .then((data) => {
      if (!data) {
        throw { msg: `maaf data anda masih kosong` };
      } else {
        let dataFilter = data;
        if (name !== undefined) {
          dataFilter = dataFilter.filter((e) => e.nama_produk.toLowerCase().includes(name.toLowerCase()));
        }
        res.status(200).json(dataFilter);
      }
    });
  }

  static get_one_products(req, res, next) {
    let id = req.params.id;

    Product.findByPk(id)
      .then((data) => {
        if (!data) {
          throw { msg: `maaf id yang anda masukkan tidak di temukan` };
        } else {
          res.status(200).json(data);
        }
      })
      .catch((err) => {
        console.log(err, `<<< error get one user`);
      });
  }

  static add_products(req, res, next) {
    let body = {
      nama_produk: req.body.nama_produk,
      CategoryId: req.body.CategoryId,
      stok: req.body.stok,
      bahan: req.body.bahan,
      harga_produk: req.body.harga_produk,
      ukuran: req.body.ukuran,
      deskripsi: req.body.deskripsi,
      gambar_produk: req.body.gambar_produk,
    };

    Product.create(body)
      .then((data) => {
        res
          .status(201)
          .json({
            msg: `selamat produk yang diinginkan dapat ditambahkan`
          });
      })
      .catch((err) => {
        console.log(err, `<<< error add produk`);
      });
  }

  static async delete_product(req, res, next) {
    try {
      let id = +req.params.id;
      const data = await Product.destroy({ where: { id } });
      if (data) {
        res.status(201).json({ msg: `data berhasil dihapus` });
      }
    } catch (error) {
      next(error);
    }
  }

  static async change_product(req, res, next) {
    try {
      let id = req.params.id;
      let obj = {
        nama_produk: req.body.nama_produk,
        CategoryId: req.body.CategoryId,
        stok: req.body.stok,
        bahan: req.body.bahan,
        harga_produk: req.body.harga_produk,
        ukuran: req.body.ukuran,
        deskripsi: req.body.deskripsi,
        gambar_produk: req.body.gambar_produk,
      };

      const data = await Product.update(obj, { where: { id } });
      if (data) res.status(201).json({ msg: `data berhasil diubah` });
    } catch (error) {
      console.log(error, `<<<< error edit product`);
      next(error);
    }
  }
}

module.exports = Product_Controller;
