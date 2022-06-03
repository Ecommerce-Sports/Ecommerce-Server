const express = require("express");
const routes = express();
const produk_controller = require("../controllers/produk_controller")

routes.get("/", produk_controller.get_products)
routes.post("/", produk_controller.add_products)
routes.get("/:id", produk_controller.get_one_products)

module.exports = routes