const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config();
const cloudinary = require('cloudinary').v2
const multer = require('multer')
const fs = require('fs')
// connecting database 

const storage = multer.diskStorage({
    filename:(req,file,cb)=>{
        cb(null,'./uploads')
    },
    destination:(req,file,cb)=>{
        const name = Date.now()+'-'+Math.round(Math.random()*1E9);
        cb(null,name +'-'+ file.originalname)
    }
})



const uploads = multer({storage})

mongoose.connect('mongodb+srv://admin:admin@konnect.lcafeyj.mongodb.net/?retryWrites=true&w=majority&appName=Konnect').then(
    console.log('database connected successfully')

    // here i will be creating the userschema and saving the files into database ...
).catch();

app.post('/',uploads.single('myfile'),(req,res)=>{
    

  
    // now we will be uploading the file to the cloudinary
    cloudinary.uploader
    .upload(req.file.path)
    .then(result=>console.log(result));

    // now for deleting the file from local we will be using the unlink function 
    // to delete file we have to import the fs module and then unlink it 

     fs.unlink(req.file.path,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log('File deleted successfully')
        }
     })

     res.status(200).json({
        message: 'File uploaded successfully',
        data: req.file,
 })

   
})

let port = process.env.PORT || 3000;

app.listen(port,()=>{
        console.log('Server is running on port'+port)
})