const express = require("express");
const routes = express();
const authentication = require("../middlewares/authentication");
const whislist_controllers = require("../controllers/whislist_controllers")

routes.use(authentication);

routes.get("/", whislist_controllers.get_wishlists)
routes.post("/", whislist_controllers.add_wishlists)
routes.get("/:id", whislist_controllers.get_one_wishlists)

module.exports = routes