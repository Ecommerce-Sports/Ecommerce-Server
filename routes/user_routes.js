const express = require("express");
const route = express.Router();
const UserController = require("../controllers/userControllers");

route.post("/register", UserController.register);
route.post("/login", UserController.login);

route.get("/", UserController.get_user);
route.get("/:email", UserController.get_one_user);

module.exports = route;