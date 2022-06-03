const express = require("express");
const routes = express();
const pemesanan_controller = require("../controllers/pemesanan_controller")

routes.get("/", pemesanan_controller.get_orderings)
routes.post("/", pemesanan_controller.add_orderings)
routes.get("/:id", pemesanan_controller.get_one_orderings)

module.exports = routes