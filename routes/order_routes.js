const express = require("express");
const routes = express();
const order_controllers = require("../controllers/order_controllers")

routes.get("/", order_controllers.get_orderings)
routes.post("/", order_controllers.add_orderings)
routes.get("/:id", order_controllers.get_one_orderings)

module.exports = routes