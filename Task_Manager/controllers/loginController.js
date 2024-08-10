const  Peoples  = require("../models/userModel");
const  bcrypt  = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginController = (req, res) => {
   const {email,password} = req.body;
   const user = Peoples.findOne({email: email}).then((datu)=>{
      if(datu !== null){
        console.log(datu.password);
      const comp =   bcrypt.compareSync(password, datu.password);
        if(comp){
             res.status(200).json({message: "Login successful",
                data: datu,
                token: jwt.sign(req.body, 'secret', {expiresIn: '1d'})
             });
        }
   }
}).catch((err)=>{
    console.log(err);
    res.status(500).json({message: "Login failed"});
})  
}
module.exports = loginController