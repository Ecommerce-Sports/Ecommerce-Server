const express = require("express");
const routes = express();
const booking_controllers = require("../controllers/booking_controllers")

routes.get("/", booking_controllers.get_orderings)
routes.post("/", booking_controllers.add_orderings)
routes.get("/:id", booking_controllers.get_one_orderings)

module.exports = routes