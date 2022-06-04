const express = require("express");
const routes = express.Router();
const user_controller = require("../controllers/user_controllers");

routes.post("/register", user_controller.register);
routes.post("/login", user_controller.login);

module.exports = routes;