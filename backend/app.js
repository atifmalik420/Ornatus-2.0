var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var { Pool } = require("pg"); // Import Pool from pg library
var config = require("config");
var cors = require("cors");
var app = express();
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

var pool = new Pool({
  user: 'postgres',
  host: 'localhost', // Or your PostgreSQL host
  database: 'Ornatus',
  password: 'lxo8999',
  port: 5432, // Default PostgreSQL port
});

// Your routes setup goes here
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/api/users");
var productsRouter = require("./routes/api/products");

app.use("/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

app.listen(4000, () => {
  console.log("Server Started");
});
pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to PostgreSQL database:', err);
  } else {
    console.log('Connected to PostgreSQL');
    // Release the client back to the pool
    release();
  }
});

module.exports = app;

// var createError = require("http-errors");
// var express = require("express");
// var path = require("path");
// var cookieParser = require("cookie-parser");
// var logger = require("morgan");
// var mongoose = require("mongoose");
// var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/api/users");
// var productsRouter = require("./routes/api/products");
// var config = require("config");
// var cors = require("cors");
// var app = express();
// app.use(cors());
// // view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");

// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
// app.use("/api/users", usersRouter);
// app.use("/api/product", productsRouter);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });
// app.use((req, res, next) => {
//   res.status(404).send("Not Found");
// });

// app.listen(4000, () => {
//   console.log("Server Started");
// });
//   mongoose
//   .connect("mongodb+srv://atif:gujjar@cluster0.szekybt.mongodb.net/", { useNewUrlParser: true })
//   .then(() => console.log("Connected to Mongo ...."))
//   .catch((error) => console.log(error.message));

// module.exports = app;