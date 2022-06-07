const express = require("express");
const routes = express();
const detail_order_routes = require("../controllers/detail_order_controllers")

routes.get("/", detail_order_routes.get_orders)
routes.post("/", detail_order_routes.add_orders)
routes.get("/:id", detail_order_routes.get_one_orders)

module.exports = routes