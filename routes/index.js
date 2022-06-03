const express = require("express");
const routes = express.Router();
const kategori_routes = require("./kategori_routes")
const customer_routes = require("./customer_routes")
const pembayaran_routes = require("./pembayaran_routes")
const pesanan_routes = require("./pesanan_routes")


routes.use("/kategori", kategori_routes)
routes.use("/customer", customer_routes)
routes.use("/pembayaran", pembayaran_routes)
routes.use("/pesanan", pesanan_routes)

module.exports = routes