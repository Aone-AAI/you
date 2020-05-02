var express = require('express');

var app = express();

app.set('View engine' , 'ejs');

app.get('/' , (req , res) =>{
    res.render(__dirname+'/views/index.ejs');
});





app.listen(3000 , 'localhost');
