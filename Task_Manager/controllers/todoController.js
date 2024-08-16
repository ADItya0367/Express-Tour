const {Todo, create} = require("../models/todoList");



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


 let gettodoController = async(req,res)=>{
    let {userId} = req.params;
    try {
       const result = await Todo.find({createdBy:userId});
        res.status(200).send(result); 
    } catch (error) {
      console.log(error)
      res.send('something went wrong')  
      
    }
}


 let todoControllerss ={
    todoController,
    gettodoController
 }


module.exports = todoControllerss ;