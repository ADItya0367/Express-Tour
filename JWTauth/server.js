const express = require('express');
const mongoose = require('mongoose')
const app = express();
const bcrypt = require('bcrypt');
require('dotenv').config();
const jwt = require('jsonwebtoken');


app.use(express.json());
// mongodb connection
mongoose.connect('mongodb+srv://admin:admin@konnect.lcafeyj.mongodb.net/?retryWrites=true&w=majority&appName=Konnect').then(d=>{console.log('Connected Successfully')}).catch(err=>console.log(err));

const Schema = mongoose.Schema({
    name: String,
    email: String,
    password_hash: String,
    role :String
},{
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});



const pretgan = mongoose.model('pretgan',Schema);


app.post('/', async(req,res)=>{


    pretgan.findOne({email: req.body.email}).then(d=>{
        if(d){
            return res.status(400).json({
                message: 'User already exists'
            })
        }
        else{
            
            const pretone = new pretgan({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password_hash,
            });
        
          
        
            pretone.save().then(d=>{
               
             var token = jwt.sign(req.body,'secretkey');
             res.status(200).json({
                 message: 'User created successfully',
                 token: token
             })
             console.log("User created successfully");

            }).catch(err=>console.log(err));
        }
    }).catch(err=>console.log(err));

    // const salt = await bcrypt.genSalt(10);
    // const hashPassword = await bcrypt.hash(req.body.password_hash, salt);


  
})

let PORT =  3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})