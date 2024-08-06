const mongoose = require('mongoose');

const db = mongoose.connect('mongodb+srv://admin:admin@konnect.lcafeyj.mongodb.net/?retryWrites=true&w=majority&appName=Konnect')

db.then(
    (d) => {
        console.log('Connected to the database');
        
        const Schema = mongoose.Schema({
            name: String,
            email: String,
            password: String
        });
        
        const User = mongoose.model('chunmuns', Schema);
        const user1= new User({
            name: 'John',
            email: 'john123@gmail.com'
        });
        user1.save().then(() => {
            console.log('User saved');
        }).catch(err => {
            console.log('Error saving user', err);
        });


    },
    err => {
        console.log('Error connecting to the database', err);
    }
).catch(err => console.log(err));



module.exports = db;