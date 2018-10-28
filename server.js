var express = require('express');
var env = require('dotenv').config();
var bodyParser = require('body-parser');
var db = require('./config/database');
var squel = require('./config/sequelizeDatabase');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Getting to my API");
})

app.listen(port, () => {
    console.log("Restarting on PORT -", port);
});

module.exports = app;