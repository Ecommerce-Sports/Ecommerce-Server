const express = require("express");
const routes = express();
const authentication = require("../middlewares/authentication");
const csat_controllers = require("../controllers/csat_controllers");

routes.use(authentication);

routes.get("/", csat_controllers.get_csats)
routes.post("/", csat_controllers.add_csats)
routes.get("/:id", csat_controllers.get_one_csats)

module.exports = routes