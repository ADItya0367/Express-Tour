const express = require('express');
const app = express();
const  multer = require('multer');

app.use(express.json());

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads');   
    },
    filename:(req,file,cb)=>{
        const suffix = Math.round(Math.random()*1e9);
        cb(null,file.fieldname + '-' + suffix);
        
    }
})

const uploads = multer({storage});
console.log(File);
app.post('/',uploads.single('myfile'),(req,res)=>{
    res.json({
        message:'file recieved successfully',
        file:req.file,
       
    });
})


let port = 4000;

app.listen(port,()=>{
    console.log('Server is running on port' + port);
})