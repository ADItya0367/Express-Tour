const express = require('express');
const app = express();
require('dotenv').config();

app.get("/",(req,res)=>{
    res.send("Hellorld");
})

app.post("/ram/:var",(req,res)=>{
    let a=req.params.var;
    res.status(200).json({
     
        a
    })
})
let PORT =4000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

