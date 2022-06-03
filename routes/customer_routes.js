const express = require("express");
const routes = express();
const customer_controller = require("../controllers/customer_controller")

routes.get("/", customer_controller.get_customers)
routes.post("/", customer_controller.add_customers)
routes.get("/:id", customer_controller.get_one_customers)

module.exports = routes