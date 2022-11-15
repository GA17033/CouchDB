/**
 * Obtener lista de la base de datos!
 * @param {*} req
 * @param {*} res
 */
//import express from "express";

const dbConnect = require("../config/index");
const producto = require("../models/producto");

const nano = dbConnect.db.use("prueba");

const getItems = async (req, res) => {
    try {
        const { rows } = await nano.list({ include_docs: true });
        const docs = rows.map((row) => row.doc);
        res.json(docs);
    } catch (err) {
        console.log(err);
    }
};

/**
* Obtener lista de la base de datos!
* @param {*} req
* @param {*} res
*/
const createItem = async (req, res) => {
    try {
        // const doc_name = "productos";
        const { name, cantidad } = req.body;
        const newProducto = new producto(name, cantidad);
        const { id, rev } = await nano.insert(newProducto);
        res.json({ id, rev });

        // const { name, cantidad } = req.body;
        // const newItem = new producto(name, cantidad);
        // const data = await nano.insert(newItem);

        // res.json(data);
    } catch (err) {
     res.status(500).json({ error: err.message });

     
    }
};
//get products by id
const getProductosByName = async (req, res) => {
    try {
    //  req =matchedData(req);
        const { id } = req.params;
        const data = await nano.find({
            selector: {
                _id: id
            }
        });
        res.json(data);
       

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
module.exports = {
    getItems,
    createItem,
    getProductosByName

};
