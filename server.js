var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var app = express();
var port = process.env.PORT || 8080;

// Tells express to use public folder for all
// static files
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger("dev"));

// Helps parse request body information.
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// TODO: May not need to require here
var mysql = require("mysql");

// Imports routes and gives our server access to them
// var routes = require("./controller/app.js");
require("./controller/html_routes.js");
require("./controller/api_routes.js");

// Tells express to utilize burgers_controllers.js
// When on home page?
// app.use("/", controller);


app.listen(port, function() {
  console.log("App listening on PORT: " + port);
});

