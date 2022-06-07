const express = require("express");
const routes = express();
const cart_controllers = require("../controllers/cart_controllers")

routes.get("/", cart_controllers.get_carts)
routes.post("/", cart_controllers.add_carts)
routes.get("/:id", cart_controllers.get_one_carts)

module.exports = routes