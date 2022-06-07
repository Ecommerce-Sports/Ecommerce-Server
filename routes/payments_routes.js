const express = require("express");
const routes = express();
const payment_controllers = require("../controllers/payment_controllers")

routes.get("/", payment_controllers.get_payments)
routes.post("/", payment_controllers.add_payments)
routes.get("/:id", payment_controllers.get_one_payments)

module.exports = routes