const express = require('express');
const Router = express.Router();
const { getItems,createItem, getProductosByName} = require("../controllers/producto");
Router.get("/",getItems);
Router.post("/",createItem);
Router.get("/:id",getProductosByName);

module.exports = Router;