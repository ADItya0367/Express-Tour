const express = require('express');


const userController = (req,res)=>{
  
   res.status(200).send("User Controller");
}

module.exports = userController;