var express = require('express');


var app = express();
// midlde ware
//
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

// ------- mongo db drive 
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://khoanmc:Aa123Bb456@>@cluster0.iipyv.mongodb.net/k12020?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     const collection = client.db("k12020").collection("userdata");
//     // perform actions on the collection object
//     console.log("Conect mongo");
//     client.close();
// });
//

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
let option = { useNewUrlParser: true, useUnifiedTopology: true };


//const uri2 = "mongodb://khoanmc:Aa123Bb456@139.59.120.33:27017/k12020"
const uri2 = "mongodb://34.80.247.54:27017/k12020"
// CRUD 
// Prints "MongoError: bad auth Authentication failed."
mongoose.connect(uri2, option).then(() => {
    console.log("Connect to server mongobd ok");

}, () => {
    console.log("Connect to server mongobd fail");
});



var info = require('./api/info');
app.use('/info', info);
var data = require('./api/dataController');
app.use('/data', data);
var server = app.listen(5000, () => {

    console.log("SERVER START.");
});