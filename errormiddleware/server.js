const express = require('express');
const app = express();
require("dotenv").config();
// creating our error handling middleware here

app.use((err,req,res,next)=>{
    console.error(err.stack);
   res.status(500).send("something broken brother")
})
// this code will be executed in case there is a problem with our server 


app.get("/",(req,res,next)=>{
    next();
},(req,res)=>{
    res.json({
        message:"Hello World"
    })
})

let port =3000;
app.listen(port,()=>{
    console.log(`someone is listning to us on port ${port}`)
})