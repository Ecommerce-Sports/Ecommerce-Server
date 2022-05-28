const express = require("express");
const routes = express.Router();
const kategori_routes = require("./kategori_routes")

routes.use("/kategori", kategori_routes)

module.exports = routes