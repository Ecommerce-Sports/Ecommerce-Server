const express = require("express");
const route = express.Router();
const Banner_Controller = require("../controllers/banner_controller");

route.get('/', Banner_Controller.getAllBanner);
route.post('/', Banner_Controller.addBanner);
route.delete('/:id', Banner_Controller.deleteBanner);

module.exports = route;