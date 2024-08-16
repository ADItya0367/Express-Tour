const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Trying = require('../models/useModel');

// connecting to database
const data= mongoose.connect('mongodb+srv://admin:admin@konnect.lcafeyj.mongodb.net/?retryWrites=true&w=majority&appName=Konnect');


const Schema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
       
    },
       email:{
        type:String,
        required:true
        
    },
    password:{
        
        type:String,
        required:true,
        
    }
})


data.then(()=>{
    console.log("Connected to database");
    app.post('/create',(req,res)=>{
        const Trying = mongoose.model('Trying',Schema);
        const newUser = new Trying(req.body);
        newUser.save().then(()=>{
            res.status(200).json({
                message:"User created successfully",
               
            })
        }).catch((err)=>{
            res.status(500).json({
                message:"Something went wrong"
            })
        })
    })
})

exports.data = data;