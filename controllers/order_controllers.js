const { Order } = require("../models")

class Order_Controller {
    static get_orderings(req, res, next) {
        const { invoice } = req.query;

        Order.findAll()
            .then((data) => {
                if (!data) {
                    throw ({ msg: `maaf data anda masih kosong` })
                } else {
                    let dataFilter = data;
                    if (invoice !== undefined) {
                    dataFilter = dataFilter.filter((e) => e.nomor_invoice.toLowerCase().includes(invoice.toLowerCase()));
                    }
                    res.status(200).json(dataFilter)
                }
            })
    }

    static get_one_orderings(req, res, next) {
        let id = req.params.id;

        Order.findByPk(id)
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
            resi: req.body_resi,
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

        Order.create(body)
            .then((data) => {
                res.status(201).json({ msg: `selamat pemesanan yang diinginkan berhasil ditambahkan` })
            })
            .catch((err) => {
                console.log(err, `<<< error add pemesanan`);
            })
    }

}

module.exports = Order_Controller;