const { Schema } = require('mongoose');
const mongoose = require('mongoose');

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
        required: true
    },
    createdBy:{
        type: Schema.ObjectId,
        ref: 'Peoples'
    },
    }
    ,{
        timestamps: true
    });

    const Todo = mongoose.model('Todo', todoSchema);

    module.exports = Todo;