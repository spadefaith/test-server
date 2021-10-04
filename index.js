const express = require('express');
const port = 7676;
const app = express();

app.get('/', function(req ,res, next){
    res.json({
        message:'hello world',
    });
})

app.get('/test', function(req ,res, next){
    res.json({
        message:'test successfull',
    });
})

const server = app.listen(port,function(err){
    if (err){
        console.log(err);
    } else {
        console.log('server is listening to port '+port);
    }
})