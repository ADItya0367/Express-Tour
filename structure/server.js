const express = require('express');
const adminRoute = require('./src/routes/Admin/adminRoute');
const app= express();
require('dotenv').config()
app.use(express.json());
app.use('/admin',adminRoute)



let port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log('Server is running on port 3000')
})