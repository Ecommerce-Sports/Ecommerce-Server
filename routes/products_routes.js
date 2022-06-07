const express = require("express");
const routes = express();
const product_controllers = require("../controllers/product_controllers")

routes.get("/", product_controllers.get_products)
routes.post("/", product_controllers.add_products)
routes.get("/:id", product_controllers.get_one_products)

module.exports = routes