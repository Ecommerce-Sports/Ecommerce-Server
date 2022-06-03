const { Todo } = require("../models");

class TodoController {
    static async getAllTodo (req, res, next) {
        try {
            const data = await Todo.findAll()
            res.status(200).json({
                msg: `Data Todo`,
                data
            })
        } catch (error) {
            next(error)
        }
    };
};

module.exports = TodoController;