const { Produk } = require("../models")

class produk_controller {
    static get_products(req, res, next) {
        Produk.findAll()
            .then((data) => {
                if (!data) {
                    throw ({ msg: `maaf data anda masih kosong` })
                } else {
                    res.status(200).json(data)
                }
            })
    }

    static get_one_products(req, res, next) {
        let id = req.params.id;

        Produk.findByPk(id)
            .then((data) => {
                if (!data) {
                    throw ({ msg: `maaf id yang anda masukkan tidak di temukan` })
                } else {
                    res.status(200).json(data)
                }
            })
            .catch((err) => {
                console.log(err, `<<< error get one user`);
            })
    }

    static add_products(req, res, next) {
        let body = {
            nama_produk: req.body.nama_produk,
            kategori_produk: req.body.kategori_produk,
            stok: req.body.stok,
            bahan: req.body.bahan,
            harga_produk: req.body.harga,
            ukuran: req.body.ukuran,
            deskripsi: req.body.deskripsi,
            gambar_produk: req.body.gambar_produk
        }

        Produk.create(body)
            .then((data) => {
                res.status(201).json({ msg: `selamat produk yang diinginkan dapat ditambahkan` })
            })
            .catch((err) => {
                console.log(err, `<<< error add produk`);
            })
    }

}

module.exports = produk_controller;