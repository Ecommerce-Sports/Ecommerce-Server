const express = require("express");
const routes = express();
const authentication = require("../middlewares/authentication");
const cart_controllers = require("../controllers/cart_controllers");

routes.use(authentication);

routes.get("/", cart_controllers.get_carts)
routes.post("/", cart_controllers.add_carts)
routes.get("/:email", cart_controllers.get_one_carts)
routes.delete("/:id", cart_controllers.delete_cart)

module.exports = routes