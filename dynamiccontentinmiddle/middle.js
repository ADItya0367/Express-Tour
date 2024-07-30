let vari= (req,res,next)=>{
    let str = '';
    for(k in req.query){
      
       str+=req.query[k]+' ';
    }
     req.query = {str}

    next();

}

module.exports ={vari}