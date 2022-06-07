const express = require("express");
const routes = express();
const category_controllers = require("../controllers/category_controllers")

routes.get("/", category_controllers.get_categories)
routes.post("/", category_controllers.add_categories)
routes.get("/:id", category_controllers.get_one_categories)

module.exports = routes