const express = require('express');
const app = express();
require('dotenv').config();
app.post('/',
    // this is a middleware function in between route and the callback function
    (req,res,next)=>{
      
 next();
},(req,res)=>{
    res.json({
        message:"Hello World",
        data:req.body
    })
})

let port =  3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

// middlewares are the function that have access to the req object, res object and the next function.
// the presence of next function is must in the middleware function.
// middleware functions are mainly used to modify the content of the req and res object before 
// proceeding to the next function or to the server.