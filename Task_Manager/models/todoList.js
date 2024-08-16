const mongoose = require('mongoose');
const { Schema } = mongoose


const todoSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true
    },
    Description:{
        type: String,
        required: true
    },
    isCompleted:{
        type: String,
       
    },
    createdBy:{
        type:Schema.ObjectId,
        ref: 'Peoples'
    },
    }
    ,{
        timestamps: true
    });

    const Todo = mongoose.model('Todo', todoSchema);

    module.exports = Todo;