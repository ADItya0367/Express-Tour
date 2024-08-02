const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());

const multer = require('multer');
// concept of disk storage in multer
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./uploads");
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"-"+file.originalname);
    }
})

const upload = multer({storage});

// uploading file using multer

app.post('/',
    // this is a middleware function in between route and the callback function
   upload.single('myfile'),(req,res)=>{
    res.json({
        message:"Hello World",
        data:req.body,
        id:req.file
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