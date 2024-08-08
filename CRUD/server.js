const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());


let dbb = mongoose.connect('mongodb+srv://admin:admin@konnect.lcafeyj.mongodb.net/?retryWrites=true&w=majority&appName=Konnect')
dbb.then((d)=>{
    console.log('Connected to the database')
}).catch((err)=>{
    console.log('Error connecting to the database')
});
// now creating schemas

const  Schema = mongoose.Schema({
    name: String,
    email: String,
    password: String
},{
    timestamps: true
})

// creating a  model now 

// defining models here 
const Animals = mongoose.model('Animals', Schema);

app.post('/api/create', (req, res) => {
     
    

    const newAnimal = new Animals({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password
    })
// saving the data to the database

    newAnimal.save().then((result)=>{
        console.log('Data saved to the database')
    }).catch((err)=>{
        console.log('Error saving the data to the database')
    })

    res.status(200).json({
        message: 'Created Successfully'
    })
});
//--------------------------------------------------------------

app.post('/api/read', (req, res) => {

    Animals.find(req.body).then((result)=>{
        res.status(200).json({
            message: 'Read Successfully',
            data: result
        })
    }).catch((err)=>{
        console.log('Error fetching data')
    })
})
//--------------------------------------------------------------


app.post('/api/delete', (req, res) => {

    Animals.deleteOne(req.body).then((result)=>{
        res.status(200).json({
            message: 'Deleted Successfully',
            data: result
        })
    }).catch((err)=>{
        console.log('Error deleting data')
    })
})









let port = 3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})