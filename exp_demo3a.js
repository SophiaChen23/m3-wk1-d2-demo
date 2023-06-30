var express = require('express');
var router = express.Router();
router.get('/home', function(req, res){
    res.send("hello Sophia");
});
router.post("/home", function(req, res){
    res.send("you just called the post method at '/hello'!\n");
});
module.exports= router;
