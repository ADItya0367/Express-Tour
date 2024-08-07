const employeeeees = require('../models/userModel');
const express = require('express');
 

 const adminController= (req,res)=>{
     
    const emp = new employeeeees(req.body);
    emp.save().then((data)=>{
        res.status(200).json({
            message: 'Data saved successfully',
            data: data
        })
    }).catch((err)=>{
        res.status(400).json({
            message: 'Data not saved',
            error: err
        })
    })
    res.status(200).json({
        message: 'Youre in the encryption server',
    })
}


exports.adminController = adminController;