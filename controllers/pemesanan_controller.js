const { Pemesanan } = require("../models")

class pemesanan_controller {
    static get_orderings(req, res, next) {
        Pemesanan.findAll()
            .then((data) => {
                if (!data) {
                    throw ({ msg: `maaf data anda masih kosong` })
                } else {
                    res.status(200).json(data)
                }
            })
    }

    static get_one_orderings(req, res, next) {
        let id = req.params.id;

        Pemesanan.findByPk(id)
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

    static add_orderings(req, res, next) {
        let body = {
            nomor_invoice: req.body.nomor_invoice,
            nama_pemesan: req.body.nama_pemesan,
            status: req.body.status,
            total_pembayaran: req.body.total_pembayaran,
            resi: req.body_resi
        }

        Pemesanan.create(body)
            .then((data) => {
                res.status(201).json({ msg: `selamat pemesanan yang diinginkan berhasil ditambahkan` })
            })
            .catch((err) => {
                console.log(err, `<<< error add pemesanan`);
            })
    }

}

module.exports = pemesanan_controller;