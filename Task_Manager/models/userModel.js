
//     const mongoose = require('mongoose');



// module.exports = Peoples;
const datab = require('../config/db');
const mongoose = require('mongoose');



const Schemaa = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
 },{
        timestamps: true
 })


const Peoples = mongoose.model('Peoples', Schemaa);

module.exports = Peoples;