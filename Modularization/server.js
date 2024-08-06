const express = require('express');
const products = require('./routes/AdminRoute');
const app = express();
const router = express.Router();
require('./config/Db');

app.use(express.json());
app.use(products);

let port = 3000;

app.listen(port,()=>{
    console.log('Server is running on port 3000')
})