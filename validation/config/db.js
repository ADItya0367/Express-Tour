const mongoose = require('mongoose');




mongoose.connect('mongodb+srv://admin:admin@konnect.lcafeyj.mongodb.net/?retryWrites=true&w=majority&appName=Konnect')
.then((d) => {
    console.log('Connected to database');
   
}).catch((err) => {
    console.log('Error connecting to database', err);
});

module.exports ={ mongoose };