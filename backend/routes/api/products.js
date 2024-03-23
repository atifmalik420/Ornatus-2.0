const express = require("express");
let router = express.Router();
const validateProduct = require("../../middlewares/validateProduct");
const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin");
const { Pool } = require("pg");

// Create a new Pool instance for PostgreSQL connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost', // Or your PostgreSQL host
  database: 'Ornatus',
  password: 'lxo8999',
  port: 5432, // Default PostgreSQL port
});

// GET all products
router.get("/", async (req, res) => {
  try {
    let page = Number(req.query.page ? req.query.page : 1);
    let perPage = Number(req.query.perPage ? req.query.perPage : 10);
    let skipRecords = perPage * (page - 1);

    const client = await pool.connect();
    const result = await client.query(`SELECT * FROM products OFFSET $1 LIMIT $2`, [skipRecords, perPage]);
    const products = result.rows;

    const countResult = await client.query(`SELECT COUNT(*) FROM products`);
    const total = countResult.rows[0].count;

    client.release();

    console.log("Total Products", products);
    console.log("Total is ", total);
    
    return res.send( products );
  } catch (error) {
    console.error("Error retrieving products:", error);
    return res.status(500).send("Internal Server Error");
  }
});

// GET single product
router.get("/:id", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`SELECT * FROM products WHERE id = $1`, [req.params.id]);
    const product = result.rows[0];
    client.release();

    if (!product) {
      return res.status(400).send("Product with given ID is not present"); // When id is not present in db
    }

    return res.send(product); // Everything is ok
  } catch (error) {
    console.error("Error retrieving product:", error);
    return res.status(500).send("Internal Server Error");
  }
});

// Update a record
router.put("/:id", validateProduct, auth, admin, async (req, res) => {
  try {
    const client = await pool.connect();
    await client.query(`UPDATE products SET name = $1, price = $2 WHERE id = $3`, [req.body.name, req.body.price, req.params.id]);
    client.release();
    
    return res.send("Product updated successfully");
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).send("Internal Server Error");
  }
});

// Delete a record
router.delete("/:id", auth, admin, async (req, res) => {
  try {
    const client = await pool.connect();
    await client.query(`DELETE FROM products WHERE id = $1`, [req.params.id]);
    client.release();

    return res.send("Product deleted successfully");
  } catch (error) {
    console.error("Error deleting product:", error);
    return res.status(500).send("Internal Server Error");
  }
});

// Insert a record
router.post("/", validateProduct, auth, async (req, res) => {
  try {
    const client = await pool.connect();
    await client.query(`INSERT INTO products (name, price) VALUES ($1, $2)`, [req.body.name, req.body.price]);
    client.release();

    return res.send("Product inserted successfully");
  } catch (error) {
    console.error("Error inserting product:", error);
    return res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

// const express = require("express");
// let router = express.Router();
// const validateProduct = require("../../middlewares/validateProduct");
// const auth = require("../../middlewares/auth");
// const admin = require("../../middlewares/admin");
// var { Product } = require("../../models/product");
// //get products
// router.get("/", async (req, res) => {
//   console.log(req.user);
//   console.log("In the get method of the API")
//   let page = Number(req.query.page ? req.query.page : 1);
//   let perPage = Number(req.query.perPage ? req.query.perPage : 10);
//   let skipRecords = perPage * (page - 1);
//   let products = await Product.find().skip(skipRecords).limit(perPage);
//   let total = await Product.countDocuments();
//   console.log("Total Products",products);
//   console.log("Total is ", total);
//   return res.send({ total, products });
// });
// //get single products
// router.get("/:id", async (req, res) => {
//   try {
//     let product = await Product.findById(req.params.id);
//     if (!product)
//       return res.status(400).send("Product With given ID is not present"); //when id is not present id db
//     return res.send(product); //everything is ok
//   } catch (err) {
//     return res.status(400).send("Invalid ID"); // format of id is not correct
//   }
// });
// //update a record
// router.put("/:id", validateProduct, auth, admin, async (req, res) => {
//   let product = await Product.findById(req.params.id);
//   product.name = req.body.name;
//   product.price = req.body.price;
//   await product.save();
//   return res.send(product);
// });
// //update a record
// router.delete("/:id", auth, admin, async (req, res) => {
//   let product = await Product.findByIdAndDelete(req.params.id);
//   return res.send(product);
// });
// //Insert a record
// router.post("/", validateProduct, auth, async (req, res) => {
//   let product = new Product();
//   product.name = req.body.name;
//   product.price = req.body.price;
//   await product.save();
//   return res.send(product);
// });
// module.exports = router;
