const express = require("express");
const router = express.Router();
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

// GET all products or products by category
router.get("/", async (req, res) => {
  try {
    console.log("Query");
    let category = req.query.category; // Get the category from query parameter
    let query = 'SELECT * FROM products';
    console.log("from API products",category)
    if (category) {
      console.log("I am in Category")
      // If category is provided, add WHERE clause to filter by category
      query += ` WHERE category = '${category}'`;
    }

    const client = await pool.connect();
    const result = await client.query(query);
    console.log(query)
    const products = result.rows;
    client.release();

    return res.send(products);
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