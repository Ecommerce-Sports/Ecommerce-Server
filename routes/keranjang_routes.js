const express = require("express");
const routes = express();
const keranjang_controller = require("../controllers/keranjang_controller")

routes.get("/", keranjang_controller.get_carts)
routes.post("/", keranjang_controller.add_carts)
routes.get("/:id", keranjang_controller.get_one_carts)

module.exports = routes