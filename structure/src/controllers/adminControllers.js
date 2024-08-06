let adminControllers=(req,res)=>{
    res.status(200).json({
        message: 'Admin Products'
    })
}

let adminControllers2 = (req,res)=>{
    res.status(200).json({
        message: 'Admin Orders'
    })
}

module.exports = adminControllers;
module.exports = adminControllers2;