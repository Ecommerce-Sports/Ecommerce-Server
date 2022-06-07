const {Payment} = require("../models")

class Payment_Controller {
    static get_payments(req, res, next){
        Payment.findAll()
        .then((data) => {
            if(!data){
                throw({ msg: `maaf data anda masih kosong` })
            } else {
                res.status(200).json(data)
            }
        })
    }

    static get_one_payments(req, res, next){
        let id = req.params.id;

        console.log(id, `<<<< id`);
        Payment.findByPk(id)
        .then((data) => {
            if(!data){
                throw ({ msg: `maaf id yang ada masukkan tidak di temukan`})
            } else {
                res.status(200).json(data)
            }
        })
        .catch((err) => {
            console.log(err, `<<< error get one payments`)
        })
    }

    static add_payments(req, res, next){
        let body = {
            metode : req.body.metode
        }
        Payment.create(body)
        .then((data) => {
            res.status(201).json({ msg: `selamat pembayaran anda berhasil di tambahkan`})
        })
        .catch((err) => {
            console.log(err, `<<< error add payments`)
        })
    }    
}

module.exports = Payment_Controller;