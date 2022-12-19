const express = require("express");
var morgan = require('morgan');
const {User}=require('./database')
const dcrouter=require('../server/routes/route.js')
const cookieParser=require('cookie-parser')
const app=express()
const cors = require("cors");
const bodyParser = require("body-parser");
// const { Router } = require("express");
app.use(cors());
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));
app.use(cookieParser())

 
app.use("/user",dcrouter)

const PORT = 3001;

app.listen(PORT, function () {
  console.log("server run http://localhost/:" + PORT);
});