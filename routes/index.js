const express = require("express");
const routes = express.Router();
const categories_routes = require("./categories_routes");
const customers_routes = require("./customers_routes");
const payments_routes = require("./payments_routes");
const order_routes = require("./order_routes");
const user_routes = require("./user_routes");
const whislists_routes = require("./whislists_routes");
const products_routes = require("./products_routes");
const carts_routes = require("./carts_routes");
const csats_routes = require("./csats_routes");
const upload_routes = require("./upload_routes");
const banner_routes = require("./banner_routes");
const rajaongkir_routes = require("./rajaongkir_routes");
const { route } = require("./categories_routes");

route.get("/", (req, res) => res.status(200).json({ message: "welcome to ecommerce sports admin server" }))
routes.use("/user", user_routes);
routes.use("/cart", carts_routes);
routes.use("/csat", csats_routes);
routes.use("/rajaongkir", rajaongkir_routes);
routes.use("/admin/category", categories_routes);
routes.use("/admin/customer", customers_routes);
routes.use("/admin/payment", payments_routes);
routes.use("/admin/whislist", whislists_routes);
routes.use("/admin/product", products_routes);
routes.use("/admin/order", order_routes);
routes.use("/upload", upload_routes);
routes.use("/admin/banner", banner_routes);

module.exports = routes
