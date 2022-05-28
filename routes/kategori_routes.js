const express = require("express");
const routes = express();
const kategori_controller = require("../controllers/kategori_controller")

routes.get("/", kategori_controller.get_categories)
routes.post("/",kategori_controller.add_categories)
routes.get("/:id", kategori_controller.get_one_categories)

module.exports = routes