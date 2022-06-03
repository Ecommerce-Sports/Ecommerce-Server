const express = require("express");
const routes = express();
const keinginan_controller = require("../controllers/keinginan_controller")

routes.get("/", keinginan_controller.get_wishlists)
routes.post("/", keinginan_controller.add_wishlists)
routes.get("/:id", keinginan_controller.get_one_wishlists)

module.exports = routes