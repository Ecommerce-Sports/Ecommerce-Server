const express = require("express");
const routes = express.Router();
const categories_routes = require("./categories_routes")
const customers_routes = require("./customers_routes")
const payments_routes = require("./payments_routes")
const bookings_routes = require("./bookings_routes")
const user_routes = require("./user_routes");
const todo_routes = require("./todoRoute");
const whislists_routes = require("./whislists_routes")
const products_routes = require("./products_routes")
const carts_routes = require("./carts_routes")
const detail_order_routes = require("./detail_order_routes")
const csats_routes = require("./csats_routes")


routes.use("/category", categories_routes)
routes.use("/customer", customers_routes)
routes.use("/payment", payments_routes)
routes.use("/detailOrder", detail_order_routes)
routes.use("/user", user_routes);
routes.use("/todo", todo_routes);
routes.use("/whislist", whislists_routes)
routes.use("/product", products_routes)
routes.use("/cart", carts_routes)
routes.use("/booking", bookings_routes)
routes.use("/csat", csats_routes)

module.exports = routes
