const express = require("express");
const route = express.Router();
const authentication = require("../middlewares/authentication");
const TodoController = require("../controllers/todoControllers");

route.use(authentication);

route.get('/', TodoController.getAllTodo)

module.exports = route;