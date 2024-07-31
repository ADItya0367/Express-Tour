const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

async function mongoconnect(){
    await mongoose.connect('mongodb+srv://admin:admin@konnect.lcafeyj.mongodb.net/?retryWrites=true&w=majority&appName=Konnect')
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
})

mongoconnect().then(
    (d)=>{
        console.log('Connected to MongoDB');
        
        app.post('/',(req,res)=>{
            let students = mongoose.model('students',userSchema);
            let stu1 = new students({name:req.body.name,email:req.body.email});
            stu1.save().then((d)=>{
                res.send('Data saved');
            }).catch(err=>console.log(err));
        })
       

    }

).catch(err=>console.log(err));



let port = 4000;

app.listen(port,()=>{
    console.log('Server is running on port 3000');
})