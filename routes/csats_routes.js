const express = require("express");
const routes = express();
const csat_controllers = require("../controllers/csat_controllers")

routes.get("/", csat_controllers.get_csats)
routes.post("/", csat_controllers.add_csats)
routes.get("/:id", csat_controllers.get_one_csats)

module.exports = routes