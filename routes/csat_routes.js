const express = require("express");
const routes = express();
const csat_controller = require("../controllers/csat_controller")

routes.get("/", csat_controller.get_csats)
routes.post("/", csat_controller.add_csats)
routes.get("/:id", csat_controller.get_one_csats)

module.exports = routes