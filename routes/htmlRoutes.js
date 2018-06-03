var express = require("express");
var router = express.Router();
var cheerio = require("cheerio");
// server side ajax request 
var request = require("request");

router.get("/", function(req, res) {
    res.send(req.params.id)
})

module.exports = router; 