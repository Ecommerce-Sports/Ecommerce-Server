const express = require("express");
const routes = express();
const pemesanan_controller = require("../controllers/pesanan_controller")

routes.get("/", pemesanan_controller.get_orders)
routes.post("/", pemesanan_controller.add_orders)
routes.get("/:id", pemesanan_controller.get_one_orders)

module.exports = routes