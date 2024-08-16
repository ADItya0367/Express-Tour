const express= require('express');
const userController = require('./controllers/userController');
const userRoute = require('./routes/userRoute');
const app= express();
const mongoose = require('mongoose');
const mongoosedb = require('./config/db');
const data = mongoosedb.data;
const Trying = require('./models/useModel');
// connecting to database

app.use(userRoute)
app.use(userController)
// this is a middleware that is used to parse the incoming request body into json format
app.use(express.json());
// this is an application level middleware example
// app.use((err,req,res,next)=>{
//     console.log("Error Handler");
//     res.status(500).send("Something went wrong");

// })
app.use((req,res,next)=>{
    const method = req.method;
    if(method ==='GET'){
        console.log("GET Request");
        res.status(300).send("data nahi dunga");
    }
     next();

})


let port = 4000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})