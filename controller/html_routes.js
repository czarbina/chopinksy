var path = require("path");
var express = require("express");
var router = express.Router();

// module.exports = function(app) {

router.get("/", function(req, res) {
  
    console.log("Hola!");
    res.end();
  
});

router.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/register.html"));
});

// }