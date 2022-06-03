const express = require("express");
const routes = express();
const pembayaran_controller = require("../controllers/pembayaran_controller")

routes.get("/", pembayaran_controller.get_payments)
routes.post("/", pembayaran_controller.add_payments)
routes.get("/:id", pembayaran_controller.get_one_payments)

module.exports = routes