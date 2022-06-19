const { Banner } = require("../models");

class Banner_Controller {
    static async getAllBanner (req, res, next) {
        try {
            const data = await Banner.findAll()
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    };

    static async addBanner(req, res, next) {
        try {
            let body = {
                gambar_banner : req.body.gambar_banner
            }
    
            const data = await Banner.create(body)
            if(data) {
                res.status(201).json({ 
                    msg: `selamat banner berhasil di tambahkan`
                })
            }
        } catch (error) {
            console.log(err, `<<< error add Banner`);
        }
        
    }

    static async deleteBanner (req, res, next) {
        try {
            let id = +req.params.id;
            const data = await Banner.destroy({ where: { id } });
            if (data) {
              res.status(201).json({ msg: `data berhasil dihapus` });
            }
          } catch (error) {
            next(error);
          }
    }
}

module.exports = Banner_Controller;