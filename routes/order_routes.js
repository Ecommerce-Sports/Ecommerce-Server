const express = require("express");
const routes = express();
const authentication = require("../middlewares/authentication");
const order_controllers = require("../controllers/order_controllers");

routes.use(authentication);

routes.get("/", order_controllers.get_orderings)
routes.post("/", order_controllers.add_orderings)
routes.get("/:id", order_controllers.get_one_orderings)

module.exports = routes