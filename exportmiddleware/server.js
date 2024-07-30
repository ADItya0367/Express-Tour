const express = require('express');
const { mwf1 } = require('./middlewares/middle');
const app = express();
app.use(express.json());
app.post('/m',mwf1,(req,res)=>{
    let name = req.body.name;
    let skill = req.body.skill;
    res.status(200).json({
        message:`Hello ${name} your skill is ${skill}`
        
    })
});

let port =  4000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})