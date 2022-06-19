const express = require("express");
const routes = express();
const authentication = require("../middlewares/authentication");
const category_controllers = require("../controllers/category_controllers");

routes.use(authentication);

routes.get("/", category_controllers.get_categories)
routes.post("/", category_controllers.add_categories)
routes.get("/:id", category_controllers.get_one_categories)
routes.delete("/:id", category_controllers.delete_category)

module.exports = routes