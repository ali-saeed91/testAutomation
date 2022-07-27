const express = require('express');
const app = express();
const PORT = 8000;
const HOST = '0.0.0.0';

app.get("/", function (req, res){
    console.log('Test API')
    res.send("Nodejs App is Running")
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);