const {Customer} = require("../models");

class Customer_Controller {
    static get_customers(req, res, next){
        Customer.findAll()
        .then((data) => {
            if(!data) {
                throw ({ msg: `maaf data anda masih kosong` })
            } else {
                res.status(200).json(data)
            }
        })
    }

    static get_one_customers(req, res, next){
        let id = req.params.id;

        Customer.findByPk(id)
        .then((data) => {            
            if(!data) {
                throw ({ msg: `maaf id yang anda masukkan tidak di temukan` })
            } else {
                res.status(200).json(data)
            }
        })
        .catch((err) => {
            console.log(err, `<<< error get one user`);
        })
    }

    static add_customers(req, res, next){
        let body = {            
            nama_lengkap : req.body.nama_lengkap,
            jenis_kelamin :req.body.jenis_kelamin,
            tanggal_lahir :req.body.tanggal_lahir,
            no_hp :req.body.no_hp,
            email :req.body.email,
            username :req.body.username,
            password :req.body.password,
            alamat :req.body.alamat,
            ibu_kandung :req.body.ibu_kandung,
            pekerjaan :req.body.pekerjaan,
            pendapatan :req.body.pendapatan,
            kota :req.body.kota,
            kecamatan :req.body.kecamatan
        }
        Customer.create(body)
        .then((data) => { 
            res.status(201).json({ msg: `selamat cusomer anda berhasil di tambahkan`})
        })
        .catch((err) => {
            console.log(err, `<<< error add customers`);
        })
    }
}

module.exports = Customer_Controller;