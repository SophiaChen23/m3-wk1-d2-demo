var express = require('express');
var app = express();

app.get("/home", (req, res) => {
    res.send('home page');
});
app.get('/about',(req, res) => {
    res.send("anout");
});
app.listen(3000);


