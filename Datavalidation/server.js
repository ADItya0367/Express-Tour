// email validation in express js using express-validator
// we can setup custom check for email validation in express js using express-validator
const express = require('express');
const app = express();
const {body , validationResult} = require('express-validator');
app.use(express.json());
app.post("/",body('email').isEmail()
,(req,res)=>{
    const error = validationResult(req);
    console.log(req.body.email);
    if(!error.isEmpty()){
        return res.status(400).json({error: error.array()})
    }
    else{
        res.json({email: req.body.email});
    }

    res.status(200).json({msg:"Hello World"});
})

let port = 4000;
app.listen(port,()=>{
    console.log(`someone is listning to us on port ${port}`)
})