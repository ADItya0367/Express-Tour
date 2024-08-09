
//     const mongoose = require('mongoose');



// module.exports = Peoples;
const datab = require('../config/db');
const mongoose = require('mongoose');



const Schemaa = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
 },{
        timestamps: true
 })


// // code to convert password into hash using bcrypt
// Schemaa.pre( 'save', async function(next){
//     const userss = this;
//       if(!userss.isModified('password'))  return next();
//           let salt = await bcrypt.genSalt(10);
//           let hash = await bcrypt.hash(userss.password, salt);
//           userss.password = hash;
//           next();
//  })
// // now we will be comparing the password here 

//       Schemaa.methods.comparePassword = async function(password){
//           return bcrypt.compare(password, this.password);
//       }


const Peoples = mongoose.model('Peoples', Schemaa);

module.exports = Peoples;