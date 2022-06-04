const express = require("express");
const routes = express.Router();
const keinginan_routes = require("./keinginan_routes")
const produk_routes = require("./produk_routes")
const keranjang_routes = require("./keranjang_routes")
const pemesanan_routes = require("./pemesanan_routes")
const csat_routes = require("./csat_routes")
const user_routes = require("./user_routes");
const todo_routes = require("./todo_routes");

routes.use("/keinginan", keinginan_routes)
routes.use("/produk", produk_routes)
routes.use("/keranjang", keranjang_routes)
routes.use("/pemesanan", pemesanan_routes)
routes.use("/csat", csat_routes)
routes.use("/user", user_routes);
routes.use("/todo", todo_routes);

module.exports = routes;
