var express = require('express');
var app = express();
app.get('/bookings/:bookingId', function(req, res) {
    res.send(req.params);
});

app.get("*", (req, res)=>{
    res.send('404! this is a invalid URL')
});


app.listen(3000);
