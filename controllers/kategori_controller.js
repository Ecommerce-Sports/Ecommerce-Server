const {Kategori_Sport} = require("../models");

class Kategori_controller {
    static get_categories(req, res, next){
        Kategori_Sport.findAll()
        .then((data) => {
            if(!data) {
                throw ({ msg: `maaf data anda masih kosong` })
            } else {
                res.status(200).json(data)
            }
        })
    }

    static get_one_categories(req, res, next){
        let id = req.params.id;

        Kategori_Sport.findByPk(id)
        .then((data) => {            
            if(!data) {
                throw ({ msg: `maaf id yang anda masukkan tidak di temukan` })
            } else {
                res.status(200).json(data)
            }
        })
        .catch((err) => {
            console.log(err, `<<< error get one categories`);
        })
    }

    static add_categories(req, res, next){
        let body = {
            nama_kategori : req.body.nama_kategori
        }
        Kategori_Sport.create(body)
        .then((data) => { 
            res.status(201).json({ msg: `selamat kategori anda berhasil di tambahkan`})
        })
        .catch((err) => {
            console.log(err, `<<< error add categories`);
        })
    }
}

module.exports = Kategori_controller;