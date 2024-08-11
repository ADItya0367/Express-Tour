const express = require('express');
const app= express();
const cors = require('cors');
const mongoose = require('mongoose');
const datab = require('./config/db');
const registerRoute = require('./routes/registerRoute');
const loginRoute = require('./routes/loginRoute');
const createtodoRoute = require('./routes/ToDoRoutes');
require('dotenv').config();
 
app.use(cors());
app.use(express.json());
app.use(registerRoute);
app.use(loginRoute)
app.use(createtodoRoute)
let PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})