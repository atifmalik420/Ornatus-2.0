// Import required modules
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");
var { Pool } = require("pg");
const cors = require("cors");

// Create an Express application
var app = express();
var router = express.Router(); // Create a router instance

// Set up the port
const PORT = 3001;

// PostgreSQL Connection
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Ornatus",
  password: "lxo8999",
  port: 5432,
});

// Connect to PostgreSQL
pool
  .connect()
  .then(() => console.log("Connected to PostgreSQL ..."))
  .catch((error) => console.log(error.message));

// Function to fetch data and return a promise
const fetchData = async () => {
  const client = await pool.connect(); // Connect to the database

  try {
    // Execute a sample query to fetch data
    const result = await client.query('SELECT * FROM Products');
    
    const data = result.rows; // Extract the data from the query result
    console.log(data)
    return data; // Return the data

  } finally {
    client.release(); // Release the client back to the pool
  }
};



// Set up middleware
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
// Route for fetching data
app.get('/product', async (req, res) => {
  try {
    const fetchedData = await fetchData();
    res.json(fetchedData);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.json({ error: 'Internal Server Error' });
});

// Assign the router to a path
app.use('/', router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// Export the app (optional, depending on your project structure)
module.exports = app;
