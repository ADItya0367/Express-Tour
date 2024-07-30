// this lecture describes how to use application level middleware in express
const express = require('express');
const app = express();
require('dotenv').config();


app.use((req,res,next)=>{
   console.log(req.method);
   if(req.method==="GET"){
      res.json({
        message:"GET request not Allowed"
      })
   }
   else{
    next();
   }
})

app.post('/',(req,res,next)=>{
next();
},(req,res)=>{
    res.json({
        message:"Hello World"
    })
})

let port = 4000;
app.listen(port,()=>{
    console.log(`someone is listning to us at ${port}` )
})