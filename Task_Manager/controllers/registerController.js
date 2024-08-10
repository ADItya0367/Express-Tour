const Peoples = require("../models/userModel");
const bcrypt = require('bcrypt')



let registerController = async(req,res)=>{

   Peoples.findOne({email: req.body.email}).then((data)=>{

       if(data === null){

        console.log(req.body.password);
        const encryptpassword = bcrypt.hashSync(req.body.password, 10);
        req.body.password = encryptpassword;

        const user = new Peoples({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password
          })
            user.save().then((data)=>{
               console.log("Registration successful");
               res.status(200).json({message: "Registration successful"});
            })
            .catch((err)=>{
                console.log(err);
                res.status(500).json({message: "Registration failed"});
            })
        //    console.log("email already exists");
        //    res.status(400).json({message: "email already exists"});
       }
         else{
              console.log("email already exists");
              res.status(400).json({message: "email already exists"});
         }

    })
}

module.exports = registerController;