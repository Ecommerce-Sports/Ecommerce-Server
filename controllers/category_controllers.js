const {Category} = require("../models");

class Category_Controller {
    static get_categories(req, res, next){
        Category.findAll()
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

        Category.findByPk(id)
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
            nama_kategori : req.body.nama_kategori,
            gambar_produk : req.body.gambar_produk
        }
        Category.create(body)
        .then((data) => { 
            res.status(201).json({ msg: `selamat kategori anda berhasil di tambahkan`})
        })
        .catch((err) => {
            console.log(err, `<<< error add categories`);
        })
    }

    static async delete_category(req, res, next) {
        try {
            let id = +req.params.id
            const data = await Category.destroy({ where: { id } })
            if(data) {
                res.status(201).json({ msg: `data berhasil dihapus` })
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Category_Controller;