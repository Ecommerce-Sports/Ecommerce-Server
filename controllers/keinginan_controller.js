const { Keinginan } = require("../models")

class keinginan_controller {
    static get_wishlists(req, res, next) {
        Keinginan.findAll()
            .then((data) => {
                if (!data) {
                    throw ({ msg: `maaf data anda masih kosong` })
                } else {
                    res.status(200).json(data)
                }
            })
    }

    static get_one_wishlists(req, res, next) {
        let id = req.params.id;

        Keinginan.findByPk(id)
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

    static add_wishlists(req, res, next) {
        let body = {
            nama_produk: req.body.nama_produk,
            harga: req.body.harga
        }

        Keinginan.create(body)
            .then((data) => {
                res.status(201).json({ msg: `selamat whislist anda berhasil ditambahkan` })
            })
            .catch((err) => {
                console.log(err, `<<< error add wishlist`);
            })
    }

}



module.exports = keinginan_controller;