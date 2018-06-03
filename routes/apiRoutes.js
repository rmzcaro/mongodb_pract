var express = require("express");
var router = express.Router();

router.get("/posts", function(req, res){
    res.send("api si working")
})

module.exports = router; 