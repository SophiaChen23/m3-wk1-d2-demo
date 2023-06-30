var express = require('express');
var app = express();

app.get('/hello', function(req,res){
    res.send("hello sophia");
});

app.listen(3001);


