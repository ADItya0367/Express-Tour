const express = require('express');
const { vari } = require('./middle');
const app= express();
require('dotenv').config();

app.use(express.json());
app.get('/details',vari,(req, res) => {
    res.json({
        message: `Details include ${req.query.str}`
    })
});

let port =  3000;
app.listen(port,()=>{
    console.log('Server is running on port 3000');
})