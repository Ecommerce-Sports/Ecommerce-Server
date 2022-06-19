const express = require("express");
const routes = express();
const authentication = require("../middlewares/authentication");
const customer_controllers = require("../controllers/customer_controllers");

routes.use(authentication);

routes.get("/", customer_controllers.get_customers)
routes.post("/", customer_controllers.add_customers)
routes.get("/:id", customer_controllers.get_one_customers)

module.exports = routes