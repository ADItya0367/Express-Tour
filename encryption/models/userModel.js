const {mongoose} = require('../config/db.js');

const  schema = mongoose.schema({})


const schemas = new schema ({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const employeeeees = mongoose.model('employee',schema);

exports.employeeeees = employeeeees;