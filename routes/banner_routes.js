const express = require("express");
const route = express.Router();
const authentication = require("../middlewares/authentication");
const Banner_Controller = require("../controllers/banner_controller");

route.use(authentication);

route.get('/', Banner_Controller.getAllBanner);
route.post('/', Banner_Controller.addBanner);
route.delete('/:id', Banner_Controller.deleteBanner);

module.exports = route;