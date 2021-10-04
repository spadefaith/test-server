const express = require('express');
const port = 7676;
const app = express();

app.use('/', function(req ,res, next){
    res.json({
        message:'hello world',
    });
})

const server = app.listen(port,function(err){
    if (err){
        console.log(err);
    } else {
        console.log('server is listening to port '+port);
    }
})