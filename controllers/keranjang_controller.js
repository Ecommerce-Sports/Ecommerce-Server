const { Keranjang } = require("../models")

class keranjang_controller {
    static get_carts(req, res, next) {
        Keranjang.findAll()
            .then((data) => {
                if (!data) {
                    throw ({ msg: `maaf data anda masih kosong` })
                } else {
                    res.status(200).json(data)
                }
            })
    }

    static get_one_carts(req, res, next) {
        let id = req.params.id;

        Keranjang.findByPk(id)
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

    static add_carts(req, res, next) {
        let body = {
            nama_produk: req.body.nama_produk,
            harga: req.body.harga,
            stok: req.body.stok,
            total: req.body.total
        }

        Keranjang.create(body)
            .then((data) => {
                res.status(201).json({ msg: `selamat barang yang ada pilih berhasil ditambahkan di keranjang` })
            })
            .catch((err) => {
                console.log(err, `<<< error add carts`);
            })
    }
}

module.exports = keranjang_controller;