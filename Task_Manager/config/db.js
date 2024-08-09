// const mongoose = require('mongoose');
// require('dotenv').config();


const mongoose = require('mongoose');
require('dotenv').config();





let datab= mongoose.connect('mongodb+srv://admin:admin@konnect.lcafeyj.mongodb.net/?retryWrites=true&w=majority&appName=Konnect').then((d)=>{
    console.log("Database connected successfully");
}).catch((err)=>{
    console.log("Database connection failed");
})

module.exports = datab;