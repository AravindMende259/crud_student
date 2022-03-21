import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Router from './router/route.js'
//const express = require('express')
const app = express()
//Mongoose
//const mongoose = require("mongoose");


//var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()


const url = 'mongodb://localhost/studentdb'
const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
    //Aravind |Mende
  };
  mongoose.connect(url, options,{useNewUrlParser: true, useUnifiedTopology: true});
const con = mongoose.connection

con.on("open",()=>{
    console.log("Server Connected")
    console.log("Check");
})



// app.use(bodyParser.json({extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
// //app.use(cors());
// // Step 2 ------------------->
// app.use('/users', Routes);
//efgstg

const PORT = process.env.PORT || '8080';
app.use('/', Router);

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))