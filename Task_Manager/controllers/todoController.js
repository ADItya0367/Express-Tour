const {Todo} = require("../models/todoList");



  let todoController = async(req,res)=>{
   try {
     const data =req.body;
        const newTodo = new Todo(data);
       const result = await newTodo.save();
     
       res.status(201).send('Task created successfully');
       console.log(result);
   } catch (error) {
     console.log(error)
     res.send('something went wrong')
    
   }
}

module.exports = todoController ;