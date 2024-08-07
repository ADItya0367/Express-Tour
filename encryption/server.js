const express = require('express');

const { adminController } = require('./controllers/adminController');
const app = express();
require('dotenv').config();
app.use(express.json());
app.use(adminController);


adminController.post('/',adminController);


const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})