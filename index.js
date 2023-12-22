
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const studentRoute = require("./controller/studentRoute");

const app = express();
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://test:12345@cluster0.3btdeit.mongodb.net/");
var db = mongoose.connection;
db.on('open',()=>console.log("Connected to Database"));
db.on('error',()=>console.log('Error occured'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use("/studentRoute",studentRoute);

app.listen(4000,()=>{
    console.log("Server started..");
})