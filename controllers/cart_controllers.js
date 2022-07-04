const { Cart } = require("../models")

class Cart_Controller {
    static get_carts(req, res, next) {
        Cart.findAll()
            .then((data) => {
                if (!data) {
                    throw ({ msg: `maaf data anda masih kosong` })
                } else {
                    res.status(200).json(data)
                }
            })
            .catch((err) => {
                console.log(err, `<<< error det all cart`);
            })
    }

    static get_one_carts(req, res, next) {
        let email = req.params.email;

        Cart.findOne({where: {email}})
            .then((data) => {
                if (!data) {
                    throw ({ msg: `maaf email yang anda masukkan tidak di temukan` })
                } else {
                    res.status(200).json(data)
                }
            })
            .catch((err) => {
                console.log(err, `<<< error get one user`);
            })
    }

    static add_carts(req, res, next) {
        let body = {
            alamat_pengiriman: req.body.alamat_pengiriman,
            biaya_pengiriman: req.body.biaya_pengiriman,
            UserId: req.body.UserId,
            email: req.body.email,
            order: req.body.order
        }

        let email = req.body.email;

        let dataOrder = [];
        let newData = {};

        Cart.findOne({ where: { email }})
        .then((data) => {
            if(data) {
                dataOrder = data.order;
                dataOrder.push(body.order[0])
                newData = {
                    ...data,
                    order: dataOrder
                }
                Cart.update(newData, { where: { email } })
                .then((data) => {
                    res.status(201).json({ msg: `data berhasil ditambahkan` });
                })
            } else {
                Cart.create(body)
                .then((data) => {
                    res.status(201).json({ msg: `selamat barang yang ada pilih berhasil ditambahkan di keranjang` })
                })
                .catch((err) => {
                    console.log(err, `<<< error add carts`);
                })
            }
        })        
    }

    static async delete_cart(req, res, next) {
        try {
          let id = +req.params.id;
          const data = await Cart.destroy({ where: { id } });
          if (data) {
            res.status(201).json({ msg: `data berhasil dihapus` });
          }
        } catch (error) {
          next(error);
        }
      }
}

module.exports = Cart_Controller;