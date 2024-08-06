const express = require('express');
const products = express.Router();



products.post('/post',(req,res)=>{
    res.status(200).json({
        message: 'Handling POST request to /products'
    })
})

products.get('/get',(req,res)=>{
    res.status(200).json({
        message: 'Handling GET request to /products'
    })
})

module.exports = products;