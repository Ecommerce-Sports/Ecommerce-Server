const { Csat } = require("../models")

class Csat_Controller {
    static get_csats(req, res, next) {
        Csat.findAll()
            .then((data) => {
                if (!data) {
                    throw ({ msg: `maaf data anda masih kosong` })
                } else {
                    res.status(200).json(data)
                }
            })
    }

    static get_one_csats(req, res, next) {
        let id = req.params.id;

        Csat.findByPk(id)
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

    static add_csats(req, res, next) {
        let body = {
            feedback: req.body.feedback,
            rating: req.body.rating,
            nama_lengkap: req.body.nama_lengkap
        }

        Csat.create(body)
            .then((data) => {
                res.status(201).json({ msg: `selamat csat Anda berhasil ditambahkan` })
            })
            .catch((err) => {
                console.log(err, `<<< error add penilaian`);
            })
    }

}

module.exports = Csat_Controller;