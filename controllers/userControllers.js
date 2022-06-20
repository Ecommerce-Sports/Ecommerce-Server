const { User } = require("../models");
const { comparePass } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");

class UserController {
    static async register (req, res, next) {
        try {
            let { nama_depan, nama_belakang, role, tanggal_lahir, no_telepon, username, email, password } = req.body;
    
            const data = await User.create({ nama_depan, nama_belakang, role, tanggal_lahir, no_telepon, username, email, password });
            res.status(201).json({
                msg : `registration success`,
                id : data.id,
                email : data.email
            })
        } catch (error) {
            next(error)
        }
    };

    static async login (req, res, next) {
        try {
            const { email, password } = req.body;

            const data = await User.findOne({
                where : { email }
            })

            if(!data) throw { msg : `invalid email or password`, name : `invalidEmailOrPassword`};

            let comparePassword = comparePass(password, data.password);
            if(!comparePassword) throw { msg : `invalid email or password`, name : `invalidEmailOrPassword`};

            let payload = {
                id : data.id,
                email : data.email,
            };

            let token = generateToken(payload);
            res.status(200).json({
                msg : 'login success',
                role: data.role,
                token
            });
        } catch (error) {
            next(error)
        }
    };
};

module.exports = UserController;