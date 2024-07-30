let mwf1 = (req,res,next)=>{
     req.body.name = req.body.name.toUpperCase();
     req.body.skill = req.body.skill.toUpperCase(); 
    next();
}

module.exports ={mwf1}