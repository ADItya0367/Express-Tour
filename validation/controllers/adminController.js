const {gods} = require('../models/dbModel')

let adminController = (req,res)=>{

    
    const god11 = new gods(req.body);
    god11.save().then(() => {
        console.log('Data saved');
    }).catch((err) => {
        console.log('Error saving data', err);
    });
    res.status(200).json({
        message: 'Admin Products'
    })
}

module.exports = adminController;