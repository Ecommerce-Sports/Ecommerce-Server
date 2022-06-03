const {Pembayaran} = require("../models")

class Pembayaran_controller {
    static get_payments(req, res, next){
        Pembayaran.findAll()
        .then((data) => {
            if(!data){
                throw({ msg: `maaf data anda masih kosong` })
            } else {
                res.status(200).json(data)
            }
        })
    }

    static get_one_payments(res, req, next){
        let id = req.params.id;

        Pembayaran.findByPK(id)
        .then((data) => {
            if(!data){
                throw ({ msg: `maaf id yang ada masukkan tidak di temukan`})
            } else {
                res.status(200).json(data)
            }
        })
    }

    static add_payments(req, res, next){
        let body = {
            metode : req.body.metode
        }
        Pembayaran.create(body)
        .then((data) => {
            res.status(201).json({ msg: `selamat pembayaran anda berhasil di tambahkan`})
        })
        .catch((err) => {
            console.log(err, `<<< error add payments`)
        })
    }    
}

module.exports = Pembayaran_controller;