const express = require('express');
const app= express();
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/peopleRoute');
const datab = require('./config/db');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(router)

let PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})