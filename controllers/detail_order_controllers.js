const {Detail_Order} = require("../models");

class Detail_Controller {
    static get_orders(req, res, next){
        Detail_Order.findAll()
        .then((data) => {
            if(!data) {
                throw ({ msg: `maaf data anda masih kosong` })
            } else {
                res.status(200).json(data)
            }
        })
        .catch((err) => {
            console.log(err, `<<<< error get all detail orders`)
        })
    }

    static get_one_orders(req, res, next){
        let id = req.params.id;

        Detail_Order.findByPk(id)
        .then((data) => {
            if(!data) {
                throw ({ msg: `maaf id yang ada masukkan tidak di temukan`})
            } else {
                res.status(200).json(data)
            }
        })
        .catch((err) => {
            console.log(err, `<<<< error get one orders`)
        })
    }

    static add_orders(req, res, next){
        let body = {
            no_invoice : req.body.no_invoice,
            nama_lengkap : req.body.nama_lengkap,
            nama_kota : req.body.nama_kota,
            alamat : req.body.alamat,
            nama_produk : req.body.nama_produk,
            harga_produk : req.body.harga_produk,
            jumlah_produk : req.body.jumlah_produk,
            pengiriman : req.body.pengiriman,
            metode_pembayaran : req.body.metode_pembayaran,
            total_produk : req.body.total_produk,
            estimasi_hari : req.body.estimasi_hari
        }
        Detail_Order.create(body)
        .then((data) => {
            res.status(201).json({ msg: `selamat detal pemesanan anda berhasil di tambahkan` })
        })
        .catch((err) => {
            console.log(err, `<<< error add orders`);
        })
    }

}

module.exports = Detail_Controller;