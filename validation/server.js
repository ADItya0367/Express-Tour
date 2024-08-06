const express = require('express');
const adminRoute = require('./routes/adminRoute');
const app= express();
require('dotenv').config();
app.use(express.json());
app.use(adminRoute)

const mongoose = require('mongoose');




module.exports = mongoose;

let port =  3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})