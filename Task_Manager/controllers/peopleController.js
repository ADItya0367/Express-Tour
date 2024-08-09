const   Peoples  = require('../models/userModel');
const bcrypt = require('bcrypt')

let control = (req,res)=>{
          
               const user = new Peoples({
                   firstname: req.body.firstname,
                   lastname: req.body.lastname,
                   username: req.body.username,
                   password: req.body.password
                 })

// code to convert password into hash using bcrypt
           user.pre( 'save', async function(next){
              const userss = this;
                if(!userss.isModified('password'))  return next();
                    let salt = await bcrypt.genSalt(10);
                    let hash = await bcrypt.hash(userss.password, salt);
                    userss.password = hash;
                    next();
           })
// now we will be comparing the password here 
     
                user.methods.comparePassword = async function(password){
                    return bcrypt.compare(password, this.password);
                }
             

           
                 user.save().then((d)=>{
                   res.send("User registered successfully");
                 }).catch((err)=>{
                   res.send("User registration failed");
                 })
          
   }

module.exports = control;