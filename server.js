var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var hbs = require("express-handlebars");
// HTTP request logger middleware 
var logger = require("morgan");
var mongoose = require("mongoose");

// scraping tools
var axios = require("axios");

// var db = require('./models')

var htmlRoutes = require("./routes/htmlRoutes");
var apiRoutes = require("./routes/apiRoutes");


const PORT = process.env.PORT || 3000; 

// body parser chunks your data (it's a middleware) in a secure way, because express by itself cannot read all daa
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })) //set extended to true to prevent stripping objects
//serve static client css and js files
app.use(express.static("public"))
// parse application/json
app.use(bodyParser.json())

app.use(htmlRoutes);
app.use("/api", apiRoutes);

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
  