const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect('mongodb+srv://admin:admin@konnect.lcafeyj.mongodb.net/?retryWrites=true&w=majority&appName=Konnect').
then((d)=>{
    console.log('database connected successfully')
}).catch((err)=>{
    console.log('database connection failed')
});



exports.mongoose = mongoose;